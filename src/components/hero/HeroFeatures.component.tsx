import React from 'react';

interface FeatureCardProps {
  image?: string;
  text: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ image, text }) => {
  return (
    <div className="flex flex-col justify-center items-center w-1/2 md:w-1/4 p-3q md:px-6 h-full">
      <img src={image} alt={text} className="h-4 md:h-11 w-auto mt-4 md:mt-0" />
      <p className="text-sm md:text-md font-bold mt-2 text-center">{text}</p>
    </div>
  );
};

const features: FeatureCardProps[] = [
  { image: '/icons/check.png', text: 'Track your guests status' },
  { image: '/icons/heart.png', text: 'Allow your guests to express' },
  { image: '/icons/customize.png', text: 'Create your personalized invitation' },
  { image: '/icons/letter.png', text: 'Share within seconds' },
];

const HeroFeatures: React.FC = () => {
  return (
    <div className="bg-white flex flex-wrap md:flex-row w-3/4 md:w-2/3 h-auto py-4 md:py-11 rounded-xl absolute -bottom-20 items-baseline z-10 shadow-lg">
      {features.map((feature, index) => (
        <FeatureCard key={index} image={feature.image} text={feature.text} />
      ))}
    </div>
  );
};

export default HeroFeatures;