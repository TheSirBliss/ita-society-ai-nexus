// src/pages/ServiceDetail.tsx
import { useParams, Link } from "react-router-dom";
import useSWR from "swr";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { useTranslation } from "react-i18next";

const fetcher = (url: string) => fetch(url).then(r => r.json());

export default function ServiceDetail() {
  const { id } = useParams<{ id: string }>();
  const { t } = useTranslation();
  const { data, error } = useSWR(id ? `/api/services/${id}` : null, fetcher);

  if (error) return <div className="p-6">Failed to load</div>;
  if (!data) return <div className="p-6">Loading...</div>;
  if (!data.ok) return <div className="p-6">Service not found</div>;

  // fetch meta separately or embed meta in same endpoint
  // For simplicity we read titleKey/shortKey from client-side services map or include in API
  return (
    <div className="container mx-auto py-8 px-4">
      <Link to="/services" className="text-blue-600 underline mb-4 inline-block">← Back</Link>
      <h1 className="text-3xl font-bold mb-4">{t(`services.${id}.title`)}</h1>
      <img src={`/images/services/${id}.jpg`} alt={t(`services.${id}.title`)} className="w-full h-64 object-cover rounded-lg mb-6" />
      <div className="prose max-w-none">
        <ReactMarkdown remarkPlugins={[remarkGfm]}>
          {data.data.markdown}
        </ReactMarkdown>
      </div>
      <div className="mt-6">
        <a href="/contact" className="inline-block px-5 py-3 bg-indigo-600 text-white rounded-lg">Request a demo</a>
      </div>
    </div>
  );
}