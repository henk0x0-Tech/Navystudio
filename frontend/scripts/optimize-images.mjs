import sharp from 'sharp';
import fs from 'fs';
import path from 'path';

const imagesDir = './public/images';
const outputDir = './public/images';

// Image configurations for optimization
const configs = {
    'navya-profile.jpg': { width: 400, height: 500, quality: 80 },
    'bridal-makeup.png': { width: 600, height: 450, quality: 75 },
    'party-makeup.png': { width: 600, height: 450, quality: 75 },
    'non-bridal-makeup.png': { width: 600, height: 450, quality: 75 },
    'hairstyle.png': { width: 600, height: 450, quality: 75 },
    'mehendi.png': { width: 600, height: 450, quality: 75 },
    'saree.png': { width: 600, height: 450, quality: 75 },
    'nail-art.jpg': { width: 600, height: 450, quality: 75 },
};

async function optimizeImages() {
    console.log('🖼️  Starting image optimization...\n');

    for (const [filename, config] of Object.entries(configs)) {
        const inputPath = path.join(imagesDir, filename);
        const ext = path.extname(filename);
        const name = path.basename(filename, ext);
        const outputPath = path.join(outputDir, `${name}-optimized${ext}`);

        if (!fs.existsSync(inputPath)) {
            console.log(`⚠️  Skipping ${filename} - file not found`);
            continue;
        }

        try {
            const originalSize = fs.statSync(inputPath).size;

            await sharp(inputPath)
                .resize(config.width, config.height, {
                    fit: 'cover',
                    position: 'center'
                })
                .jpeg({ quality: config.quality, mozjpeg: true })
                .toFile(outputPath.replace(ext, '.jpg'));

            const newSize = fs.statSync(outputPath.replace(ext, '.jpg')).size;
            const savings = ((originalSize - newSize) / originalSize * 100).toFixed(1);

            console.log(`✅ ${filename}`);
            console.log(`   Original: ${(originalSize / 1024).toFixed(0)} KB`);
            console.log(`   Optimized: ${(newSize / 1024).toFixed(0)} KB`);
            console.log(`   Savings: ${savings}%\n`);
        } catch (error) {
            console.error(`❌ Error optimizing ${filename}:`, error.message);
        }
    }

    console.log('✨ Image optimization complete!');
}

optimizeImages();
