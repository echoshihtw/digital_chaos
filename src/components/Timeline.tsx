import type { ExperienceItem } from '@/lib/types';


export default function Timeline({ items }: { items: ExperienceItem[] }) {
    return (
        <div style={{ display:'grid', gap:20 }}>
            {items.map((it, i) => (
                <div key={i} className="neon-border" style={{ padding:16, borderRadius:12 }}>
                    <div className="mono" style={{ opacity:.9 }}>{it.start} – {it.end}</div>
                    <div style={{ fontWeight:600 }}>{it.title} · {it.org}</div>
                    <ul style={{ margin:'6px 0 0 16px' }}>
                        {it.bullets.map((b, idx) => <li key={idx}>{b}</li>)}
                    </ul>
                </div>
            ))}
        </div>
    );
}