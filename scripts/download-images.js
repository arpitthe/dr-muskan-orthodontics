const fs = require('fs');
const path = require('path');
const https = require('https');

const targetDir = path.join(__dirname, '../public/images');
if (!fs.existsSync(targetDir)) {
  fs.mkdirSync(targetDir, { recursive: true });
}

const images = {
  'clear-aligners.jpg': 'https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&q=80&w=800',
  'metal-braces.jpg': 'https://images.unsplash.com/photo-1594824476967-48c8b964273f?auto=format&fit=crop&q=80&w=800',
  'ceramic-braces.jpg': 'https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&q=80&w=800',
  'smile-design.jpg': 'https://images.unsplash.com/photo-1594824476967-48c8b964273f?auto=format&fit=crop&q=80&w=800',
  'consultation.jpg': 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&q=80&w=800',
  'dentofacial-orthopedics.jpg': 'https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&q=80&w=800',
  'retainers.jpg': 'https://images.unsplash.com/photo-1600170311833-c2cf5280ce49?auto=format&fit=crop&q=80&w=800',
  'preventive-care.jpg': 'https://images.unsplash.com/photo-1598256989800-fe5f95da9787?auto=format&fit=crop&q=80&w=800',
  'testimonial-priya.jpg': 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=300&h=300',
  'testimonial-rahul.jpg': 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=300&h=300',
  'testimonial-ananya.jpg': 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=300&h=300',
  'testimonial-vikram.jpg': 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=300&h=300',
  'testimonial-meera.jpg': 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=300&h=300',
  'testimonial-siddharth.jpg': 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&q=80&w=300&h=300',
  'video-placeholder.jpg': 'https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&q=80&w=800'
};

const download = (filename, url) => {
  return new Promise((resolve, reject) => {
    const filePath = path.join(targetDir, filename);
    const file = fs.createWriteStream(filePath);
    https.get(url, (response) => {
      if (response.statusCode === 302 || response.statusCode === 301) {
        download(filename, response.headers.location).then(resolve).catch(reject);
        return;
      }
      if (response.statusCode !== 200) {
        console.error(`Failed to download ${filename}: status code ${response.statusCode}`);
        file.close();
        fs.unlink(filePath, () => {});
        resolve();
        return;
      }
      response.pipe(file);
      file.on('finish', () => {
        file.close(() => {
          console.log(`Downloaded ${filename}`);
          resolve();
        });
      });
    }).on('error', (err) => {
      fs.unlink(filePath, () => {});
      console.error(`Error downloading ${filename}:`, err.message);
      resolve();
    });
  });
};

const run = async () => {
  for (const [filename, url] of Object.entries(images)) {
    // Only download if file does not exist to avoid unnecessary downloads
    const filePath = path.join(targetDir, filename);
    if (fs.existsSync(filePath)) {
      console.log(`File already exists: ${filename}`);
      continue;
    }
    console.log(`Starting download for ${filename}...`);
    await download(filename, url);
  }
  console.log('All downloads complete!');
};

run();
