import React from 'react';

interface ArtProps {
  className?: string;
  isDecorative?: boolean;
}

// 1. HandbagArt: Structured tan leather tote bag with rolled handles, edge burnishing, stitching, and brass hardware
export const HandbagArt: React.FC<ArtProps> = ({ className = '', isDecorative = false }) => (
  <svg
    viewBox="0 0 160 140"
    className={`w-full h-auto ${className}`}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    role={isDecorative ? undefined : 'img'}
    aria-label={isDecorative ? undefined : 'Structured tan leather tote bag'}
    aria-hidden={isDecorative ? 'true' : undefined}
  >
    {/* Soft floor shadow */}
    <ellipse cx="80" cy="130" rx="54" ry="7" fill="#E7E6E0" opacity="0.8" />

    {/* Back handle */}
    <path
      d="M58 55 C58 20, 102 20, 102 55"
      stroke="#7A5630"
      strokeWidth="5"
      strokeLinecap="round"
    />

    {/* Main Tote Body Trapeze */}
    <path
      d="M40 54 L120 54 L114 122 C114 125, 110 128, 104 128 L56 128 C50 128, 46 125, 46 122 Z"
      fill="#BA925C"
    />
    {/* Main body tone / subtle depth */}
    <path
      d="M43 56 L117 56 L112 120 C112 124, 108 126, 103 126 L57 126 C52 126, 48 124, 48 120 Z"
      fill="#C5A069"
    />

    {/* Front panel center contour */}
    <path
      d="M56 56 L104 56 L99 126 L61 126 Z"
      fill="#CDAA74"
    />

    {/* Artisanal edge saddle stitching */}
    <path
      d="M48 60 L112 60 M52 122 L108 122"
      stroke="#EFE6D6"
      strokeWidth="1.2"
      strokeDasharray="2.5 2"
      strokeLinecap="round"
      opacity="0.85"
    />
    <path
      d="M58 56 L63 126 M102 56 L97 126"
      stroke="#7A5630"
      strokeWidth="1.2"
      strokeDasharray="3 2"
      opacity="0.6"
    />

    {/* Front Rolled Handle */}
    <path
      d="M62 60 C62 25, 98 25, 98 60"
      stroke="#966C3B"
      strokeWidth="5"
      strokeLinecap="round"
    />
    <path
      d="M62 60 C62 26, 98 26, 98 60"
      stroke="#B38954"
      strokeWidth="2.5"
      strokeLinecap="round"
    />

    {/* Brass handle anchors & studs */}
    <rect x="59" y="58" width="6" height="12" rx="3" fill="#D4AF37" />
    <rect x="95" y="58" width="6" height="12" rx="3" fill="#D4AF37" />
    <circle cx="62" cy="64" r="1.5" fill="#7A5630" />
    <circle cx="98" cy="64" r="1.5" fill="#7A5630" />

    {/* Subtle hanging key clochette */}
    <path d="M72 66 L72 82" stroke="#7A5630" strokeWidth="1.5" />
    <path d="M69 82 L75 82 L77 90 L67 90 Z" fill="#966C3B" />
  </svg>
);

// 2. SneakerArt: Minimalist luxury leather sneaker with cupsole, perforated toe, heel counter, and eyelets
export const SneakerArt: React.FC<ArtProps> = ({ className = '', isDecorative = false }) => (
  <svg
    viewBox="0 0 160 140"
    className={`w-full h-auto ${className}`}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    role={isDecorative ? undefined : 'img'}
    aria-label={isDecorative ? undefined : 'Minimalist calfskin leather sneaker'}
    aria-hidden={isDecorative ? 'true' : undefined}
  >
    {/* Floor shadow */}
    <ellipse cx="80" cy="126" rx="60" ry="7" fill="#E7E6E0" opacity="0.8" />

    {/* Rubber cupsole base */}
    <path
      d="M24 114 C24 114, 40 122, 90 122 C134 122, 142 114, 142 114 L142 110 C142 110, 134 116, 90 116 C40 116, 24 110, 24 110 Z"
      fill="#EFEBE4"
    />
    <path
      d="M24 110 C24 110, 42 118, 90 118 C132 118, 142 110, 142 110 L140 102 C140 102, 130 108, 90 108 C42 108, 26 102, 26 102 Z"
      fill="#F6F2EB"
      stroke="#DDD8CE"
      strokeWidth="1"
    />

    {/* Upper Leather Silhouette */}
    <path
      d="M26 102 C26 102, 30 78, 50 68 C62 62, 74 68, 86 76 C102 86, 126 88, 138 98 C140 100, 140 104, 138 106 Z"
      fill="#EDE8DF"
    />

    {/* Tan Leather Heel Counter Accent */}
    <path
      d="M26 102 C26 94, 30 82, 42 74 L48 94 C48 100, 38 102, 26 102 Z"
      fill="#C5A069"
    />

    {/* Padded Collar & Lining */}
    <path
      d="M44 72 C52 64, 66 64, 76 74"
      stroke="#172A25"
      strokeWidth="3.5"
      strokeLinecap="round"
    />

    {/* Quarter panel stitch line */}
    <path
      d="M48 88 C64 82, 88 88, 102 98"
      stroke="#966C3B"
      strokeWidth="1.2"
      strokeDasharray="2 1.5"
      strokeLinecap="round"
    />

    {/* Eyestay & Flat Cotton Laces */}
    <path
      d="M66 76 L92 90"
      stroke="#DDD8CE"
      strokeWidth="4"
      strokeLinecap="round"
    />
    <path d="M70 76 L78 78 M74 80 L82 82 M78 84 L86 86 M82 88 L90 90" stroke="#FAF8F5" strokeWidth="2" strokeLinecap="round" />

    {/* Toe box stitching & perforations */}
    <path
      d="M106 96 C116 94, 128 98, 136 104"
      stroke="#C5A069"
      strokeWidth="1"
      strokeDasharray="2 1.5"
    />
    <circle cx="120" cy="100" r="1" fill="#BA925C" />
    <circle cx="124" cy="102" r="1" fill="#BA925C" />
    <circle cx="128" cy="104" r="1" fill="#BA925C" />
  </svg>
);

// 3. LeatherShoeArt: Goodyear-welted leather Penny Loafer / Oxford
export const LeatherShoeArt: React.FC<ArtProps> = ({ className = '', isDecorative = false }) => (
  <svg
    viewBox="0 0 160 140"
    className={`w-full h-auto ${className}`}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    role={isDecorative ? undefined : 'img'}
    aria-label={isDecorative ? undefined : 'Handcrafted burnished leather penny loafer'}
    aria-hidden={isDecorative ? 'true' : undefined}
  >
    {/* Floor shadow */}
    <ellipse cx="80" cy="126" rx="58" ry="6" fill="#E7E6E0" opacity="0.8" />

    {/* Stacked leather heel & welt sole */}
    <path
      d="M28 108 L28 116 L48 116 L48 110 L136 110 C140 108, 142 104, 138 104 L28 104 Z"
      fill="#2A1B12"
    />
    <path
      d="M26 104 L140 104"
      stroke="#C5A069"
      strokeWidth="1.2"
      strokeDasharray="2 1.5"
    />

    {/* Upper burnished calfskin silhouette */}
    <path
      d="M28 104 C28 90, 34 76, 52 70 C68 64, 82 72, 98 80 C114 88, 134 94, 138 104 Z"
      fill="#633F20"
    />
    {/* Burnish highlight gradient overlay */}
    <path
      d="M48 74 C64 68, 80 76, 94 82 C110 88, 126 94, 134 100 L128 104 L32 104 C32 94, 38 82, 48 74 Z"
      fill="#7E522B"
    />

    {/* Loafer Apron / Moc-toe stitched ridge */}
    <path
      d="M82 78 C96 74, 122 84, 130 96"
      stroke="#C5A069"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeDasharray="3 2"
    />

    {/* Penny strap band with cutout */}
    <path
      d="M74 76 L86 83 L82 91 L70 84 Z"
      fill="#4F2F16"
      stroke="#3A210F"
      strokeWidth="1"
    />
    <rect x="74" y="80" width="6" height="3" rx="1.5" fill="#C5A069" transform="rotate(30 74 80)" />

    {/* Inner collar lining in tan leather */}
    <path
      d="M46 72 C56 68, 68 70, 76 76"
      stroke="#BA925C"
      strokeWidth="2.5"
      strokeLinecap="round"
    />
  </svg>
);

// 4. WalletArt: Bifold grain leather wallet with card slots and saddle stitching
export const WalletArt: React.FC<ArtProps> = ({ className = '', isDecorative = false }) => (
  <svg
    viewBox="0 0 160 140"
    className={`w-full h-auto ${className}`}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    role={isDecorative ? undefined : 'img'}
    aria-label={isDecorative ? undefined : 'Full-grain bifold leather wallet'}
    aria-hidden={isDecorative ? 'true' : undefined}
  >
    {/* Shadow */}
    <ellipse cx="80" cy="122" rx="50" ry="6" fill="#E7E6E0" opacity="0.8" />

    {/* Opened / Perspective Bifold Structure */}
    {/* Left leaf */}
    <path
      d="M36 60 L78 68 L78 116 L36 108 Z"
      fill="#8C6239"
      stroke="#6E4B28"
      strokeWidth="1"
    />
    {/* Right leaf */}
    <path
      d="M78 68 L124 58 L124 106 L78 116 Z"
      fill="#A37547"
      stroke="#7A5630"
      strokeWidth="1"
    />

    {/* Interior Card Slots on Right Leaf */}
    <path d="M84 78 L118 70" stroke="#7A5630" strokeWidth="2.5" strokeLinecap="round" />
    <path d="M84 88 L118 80" stroke="#7A5630" strokeWidth="2.5" strokeLinecap="round" />
    <path d="M84 98 L118 90" stroke="#7A5630" strokeWidth="2.5" strokeLinecap="round" />

    {/* Subtle card edge peeking out */}
    <rect x="88" y="70" width="26" height="5" rx="1" fill="#EFE6D6" transform="rotate(-10 88 70)" />

    {/* Fine perimeter saddle stitching */}
    <path
      d="M38 63 L76 70 L122 61 L122 103 L78 113 L38 105 Z"
      stroke="#EFE6D6"
      strokeWidth="1.2"
      strokeDasharray="2.5 2"
      fill="none"
      opacity="0.85"
    />

    {/* Center fold crease */}
    <line x1="78" y1="68" x2="78" y2="116" stroke="#4F3319" strokeWidth="2" />
  </svg>
);

// 5. BeltArt: Coiled vegetable-tanned leather belt with solid brass buckle
export const BeltArt: React.FC<ArtProps> = ({ className = '', isDecorative = false }) => (
  <svg
    viewBox="0 0 160 140"
    className={`w-full h-auto ${className}`}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    role={isDecorative ? undefined : 'img'}
    aria-label={isDecorative ? undefined : 'Vegetable-tanned leather belt with brass buckle'}
    aria-hidden={isDecorative ? 'true' : undefined}
  >
    {/* Shadow */}
    <ellipse cx="80" cy="124" rx="52" ry="7" fill="#E7E6E0" opacity="0.8" />

    {/* Coiled leather layers */}
    <ellipse cx="80" cy="94" rx="46" ry="24" fill="#916438" />
    <ellipse cx="80" cy="92" rx="42" ry="21" fill="#AA7948" />
    <ellipse cx="80" cy="90" rx="34" ry="16" fill="#7D522B" />
    <ellipse cx="80" cy="88" rx="30" ry="14" fill="#C5A069" />

    {/* Belt end extending forward */}
    <path
      d="M48 94 C48 108, 76 116, 108 114 L120 112"
      stroke="#82572E"
      strokeWidth="11"
      strokeLinecap="round"
    />
    <path
      d="M48 94 C48 108, 76 116, 108 114 L120 112"
      stroke="#9C6B3A"
      strokeWidth="8"
      strokeLinecap="round"
    />

    {/* Edge burnishing stitch */}
    <path
      d="M52 97 C52 108, 76 114, 108 112"
      stroke="#EFE6D6"
      strokeWidth="1"
      strokeDasharray="2 1.5"
      fill="none"
    />

    {/* Belt punch holes */}
    <circle cx="86" cy="112" r="1.5" fill="#422915" />
    <circle cx="96" cy="112" r="1.5" fill="#422915" />
    <circle cx="106" cy="111" r="1.5" fill="#422915" />

    {/* Solid Brass Buckle */}
    <rect x="36" y="80" width="14" height="22" rx="3" fill="#D4AF37" stroke="#997A1E" strokeWidth="1" />
    <rect x="40" y="84" width="6" height="14" rx="1.5" fill="#6A4423" />
    <line x1="43" y1="80" x2="43" y2="102" stroke="#B89428" strokeWidth="2" strokeLinecap="round" />
  </svg>
);

// 6. ApparelArt: Tailored leather overshirt / suede jacket
export const ApparelArt: React.FC<ArtProps> = ({ className = '', isDecorative = false }) => (
  <svg
    viewBox="0 0 160 140"
    className={`w-full h-auto ${className}`}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    role={isDecorative ? undefined : 'img'}
    aria-label={isDecorative ? undefined : 'Tailored suede overshirt and jacket'}
    aria-hidden={isDecorative ? 'true' : undefined}
  >
    {/* Shadow */}
    <ellipse cx="80" cy="130" rx="46" ry="6" fill="#E7E6E0" opacity="0.8" />

    {/* Hanger / neck collar */}
    <path d="M64 36 L80 30 L96 36" stroke="#C5A77A" strokeWidth="3" strokeLinecap="round" />
    
    {/* Jacket Torso & Sleeves */}
    <path
      d="M54 44 L30 76 L44 82 L52 64 L52 122 L108 122 L108 64 L116 82 L130 76 L106 44 Z"
      fill="#8A633E"
    />
    <path
      d="M56 46 L80 54 L104 46 L106 120 L54 120 Z"
      fill="#9D7248"
    />

    {/* Lapels & Collar */}
    <path d="M68 40 L80 58 L68 76" stroke="#4D331B" strokeWidth="2" fill="#754E29" />
    <path d="M92 40 L80 58 L92 76" stroke="#4D331B" strokeWidth="2" fill="#754E29" />

    {/* Front Button Placket */}
    <line x1="80" y1="58" x2="80" y2="120" stroke="#5E3E20" strokeWidth="2.5" />

    {/* Horn / Brass Buttons */}
    <circle cx="80" cy="68" r="2" fill="#D4AF37" />
    <circle cx="80" cy="84" r="2" fill="#D4AF37" />
    <circle cx="80" cy="100" r="2" fill="#D4AF37" />

    {/* Chest flap pockets with stitching */}
    <rect x="58" y="74" width="16" height="18" rx="2" fill="#8C6239" stroke="#EFE6D6" strokeWidth="0.8" strokeDasharray="2 1.5" />
    <rect x="86" y="74" width="16" height="18" rx="2" fill="#8C6239" stroke="#EFE6D6" strokeWidth="0.8" strokeDasharray="2 1.5" />
  </svg>
);
