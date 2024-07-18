import multer from 'multer';

// Initialize multer middleware
export const uploadMiddleware = multer({
    storage: multer.diskStorage({}),
    fileFilter: (req, file, cb) => {
        // Accept only pdf files, for example
        if (file.mimetype.startsWith('application/pdf')) {
            cb(null, true);
        } else {
            cb(new Error('File type not supported!'), false);
        }
    }
}).single('file');



