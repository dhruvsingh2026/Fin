import React, { useState } from 'react';
import {
  HandbagArt,
  SneakerArt,
  LeatherShoeArt,
  WalletArt,
  BeltArt,
  ApparelArt,
} from './art/ProductArt.tsx';

interface ProductImageProps {
  artKey: 'handbag' | 'sneaker' | 'loafer' | 'wallet' | 'belt' | 'apparel';
  imageSrc?: string;
  alt: string;
  className?: string;
  aspectClassName?: string;
  isDecorative?: boolean;
}

export const ProductImage: React.FC<ProductImageProps> = ({
  artKey,
  imageSrc,
  alt,
  className = '',
  aspectClassName = 'aspect-4/3',
  isDecorative = false,
}) => {
  const [imageError, setImageError] = useState(false);

  const renderArt = () => {
    switch (artKey) {
      case 'handbag':
        return <HandbagArt className="w-full h-full object-contain p-2" isDecorative={isDecorative} />;
      case 'sneaker':
        return <SneakerArt className="w-full h-full object-contain p-2" isDecorative={isDecorative} />;
      case 'loafer':
        return <LeatherShoeArt className="w-full h-full object-contain p-2" isDecorative={isDecorative} />;
      case 'wallet':
        return <WalletArt className="w-full h-full object-contain p-2" isDecorative={isDecorative} />;
      case 'belt':
        return <BeltArt className="w-full h-full object-contain p-2" isDecorative={isDecorative} />;
      case 'apparel':
      default:
        return <ApparelArt className="w-full h-full object-contain p-2" isDecorative={isDecorative} />;
    }
  };

  return (
    <div
      className={`relative overflow-hidden bg-surface-soft flex items-center justify-center select-none ${aspectClassName} ${className}`}
    >
      {imageSrc && !imageError ? (
        <img
          src={imageSrc}
          alt={alt}
          onError={() => setImageError(true)}
          className="w-full h-full object-cover"
          loading="lazy"
        />
      ) : (
        renderArt()
      )}
    </div>
  );
};
