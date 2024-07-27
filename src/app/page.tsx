import { FeatureTitle } from "~/components/features/title";
import {
  Hospitability,
  Offices,
  Residencies,
} from "~/components/features/card";
import HeroSection from "~/components/sections/HeroSection";

export default function HomePage() {
  const features = [
    { title: "Residencies", card: Residencies },
    { title: "Offices", card: Offices },
    { title: "Hospitability", card: Hospitability },
  ];
  return (
    <>
      <HeroSection />
      <section>
        {/* Features */}
        <div className="flex w-full items-start p-10">
          <div className="w-full py-[50vh]">
            <ul>
              {features.map((feature) => (
                <li key={feature.title}>
                  <FeatureTitle title={feature.title}>
                    {feature.title}
                  </FeatureTitle>
                </li>
              ))}
            </ul>
          </div>
          <div className="sticky top-10 flex h-screen w-full items-center">
            <div className="relative aspect-square h-[400px] w-full rounded-2xl bg-gray-300">
              {features.map((feature) => (
                <feature.card key={feature.title} title={feature.title} />
              ))}
            </div>
          </div>
        </div>
        <div className="h-screen">More room to scroll</div>
      </section>
    </>
  );
}
