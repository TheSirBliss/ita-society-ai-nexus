// src/pages/ServicesList.tsx
import { Link } from "react-router-dom";
import useSWR from "swr";
import { useTranslation } from "react-i18next";



const fetcher = (url: string) => fetch(url).then(res => res.json());

export default function ServicesList() {
  const { t } = useTranslation();
  const { data, error } = useSWR("/api/services", fetcher);

  if (error) return <div className="p-6">Failed to load</div>;
  if (!data) return <div className="p-6">Loading...</div>;

  return (
    <div className="container mx-auto py-8 px-4">
      <h1 className="text-3xl font-bold mb-6">{t("servicesList.title", "Our Services")}</h1>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {data.data.map((s: any) => (
          <Link
            key={s.id}
            to={`/services/${s.id}`}
            className="block bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition transform hover:-translate-y-1"
            style={{ touchAction: "manipulation", WebkitTapHighlightColor: "transparent" }}
          >
            <div className="h-44 w-full relative">
              <img
                src={s.image}
                alt={s.title}
                loading="lazy"
                className="w-full h-48 object-cover rounded"
              />
            </div>
            <div className="p-4">
              <h2 className="text-xl font-semibold">{t(s.titleKey)}</h2>
              <p className="text-sm text-gray-600 mt-2">{t(s.shortKey)}</p>
              <div className="mt-4">
                <button aria-hidden className="px-4 py-2 rounded-lg bg-blue-600 text-white text-sm pointer-events-none">
                  {t("discover", "Discover more →")}
                </button>
              </div>
            </div>
          </Link>
        ))}
      </div>
      {/* Floating Action Button - assicurati z-index basso per non coprire elementi critici */}
      <div className="fixed right-6 bottom-6 z-40">
        <Link to="/contact" className="w-14 h-14 rounded-full flex items-center justify-center shadow-lg bg-violet-600 text-white">
          +
        </Link>
      </div>
    </div>
  );
}