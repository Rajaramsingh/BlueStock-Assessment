import { images } from '../../constants/images';

export default function AppDownload() {
  return (
    <div className="bg-white shadow-sm rounded-lg p-6 max-w-sm mx-auto my-8">
      <div className="flex justify-between items-center">
        <div>
          <h3 className="font-bold text-lg mb-1">Get Bluestock™</h3>
          <p className="text-gray-600 text-sm">Mobile App</p>
          <div className="mt-4">
            <a 
              href="https://play.google.com/store/apps/details?id=your.app.id" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              <img 
                src={images.playStore} 
                alt="Play Store" 
                className="h-8 hover:opacity-80 transition-opacity"
              />
            </a>
          </div>
        </div>
        <div>
          <img 
            src={images.qrCode} 
            alt="QR Code" 
            className="w-24 h-24"
          />
        </div>
      </div>
    </div>
  );
} 