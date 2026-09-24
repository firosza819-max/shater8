import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Check,
  ChevronLeft,
  Download,
  FileText,
  LayoutDashboard,
  MonitorDown,
  Package,
  ShoppingCart,
  Store,
  X,
} from 'lucide-react';
import brandLogo from '@/lib/1000015757.jpg';

const tiles = [
  { title: 'لوحة التحكم', desc: 'نظرة عامة وإدارة المستخدمين', icon: LayoutDashboard, to: '/admin', gradient: 'from-indigo-500 to-blue-600', glow: 'rgba(79, 70, 229, 0.25)' },
  { title: 'المبيعات', desc: 'نقطة بيع سريعة وإصدار فواتير', icon: FileText, to: '/sales', gradient: 'from-emerald-500 to-teal-600', glow: 'rgba(16, 185, 129, 0.25)' },
  { title: 'المشتريات', desc: 'تسجيل فواتير الموردين', icon: ShoppingCart, to: '/purchases', gradient: 'from-blue-500 to-indigo-600', glow: 'rgba(59, 130, 246, 0.25)' },
  { title: 'المخزن', desc: 'إدارة الأصناف والكميات', icon: Package, to: '/inventory', gradient: 'from-amber-500 to-orange-600', glow: 'rgba(245, 158, 11, 0.25)' },
  { title: 'الفواتير', desc: 'سجل جميع المعاملات', icon: FileText, to: '/invoices', gradient: 'from-violet-500 to-purple-600', glow: 'rgba(139, 92, 246, 0.25)' },
];

export function LauncherPage() {
  const navigate = useNavigate();
  const [installOpen, setInstallOpen] = useState(false);
  const [installPrompt, setInstallPrompt] = useState(null);

  useEffect(() => {
    const captureInstallPrompt = (event) => {
      event.preventDefault();
      setInstallPrompt(event);
    };
    const clearInstallPrompt = () => setInstallPrompt(null);
    window.addEventListener('beforeinstallprompt', captureInstallPrompt);
    window.addEventListener('appinstalled', clearInstallPrompt);
    return () => {
      window.removeEventListener('beforeinstallprompt', captureInstallPrompt);
      window.removeEventListener('appinstalled', clearInstallPrompt);
    };
  }, []);

  const handleInstall = async () => {
    if (!installPrompt) {
      window.alert('التثبيت المباشر غير متاح حاليًا. افتح الموقع في Chrome أو Edge عبر HTTPS ثم اضغط زر التثبيت مرة أخرى.');
      return;
    }
    installPrompt.prompt();
    await installPrompt.userChoice;
    setInstallPrompt(null);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-indigo-50/40 dark:from-slate-950 dark:via-slate-900 dark:to-indigo-950/30 pb-28">
      <div className="max-w-5xl mx-auto px-6 pt-12 pb-8 text-center">
        <div className="inline-flex items-center justify-center max-w-xs w-full h-auto max-h-80 rounded-2xl overflow-hidden shadow-lg shadow-indigo-500/20 mb-4 card-mount border-2 border-white dark:border-slate-800 bg-black/5 p-2">
          <img src={brandLogo} alt="شاطر" className="w-full h-full object-contain rounded-xl" />
        </div>
        <h1 className="text-3xl font-extrabold text-slate-800 dark:text-white card-mount" style={{ animationDelay: '60ms' }}>شاطر</h1>
        <p className="text-slate-500 dark:text-slate-400 mt-2 card-mount" style={{ animationDelay: '120ms' }}>مرحباً — اختر القسم للبدء</p>
      </div>

      <div className="max-w-5xl mx-auto px-6 pb-16">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-5">
          {tiles.map((tile, i) => (
            <button key={tile.to} onClick={() => navigate(tile.to)} style={{ animationDelay: `${160 + i * 90}ms` }} className="group relative card p-6 text-center card-mount overflow-hidden transition-all duration-300 hover:-translate-y-2 hover:shadow-xl active:scale-95">
              <div className="absolute -top-10 -left-10 w-28 h-28 rounded-full opacity-0 group-hover:opacity-100 blur-2xl transition-opacity duration-500" style={{ background: tile.glow }} />
              <div className={`absolute top-0 right-0 left-0 h-1.5 bg-gradient-to-l ${tile.gradient} opacity-50 group-hover:opacity-100 transition-opacity`} />
              <div className="relative flex flex-col items-center gap-3">
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${tile.gradient} flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-all duration-300`}><tile.icon className="w-8 h-8 text-white" /></div>
                <div><h3 className="font-bold text-slate-800 dark:text-white">{tile.title}</h3><p className="text-xs text-slate-500 dark:text-slate-400 mt-1 leading-relaxed">{tile.desc}</p></div>
                <div className="flex items-center gap-1 text-xs font-semibold text-indigo-600 dark:text-indigo-400 opacity-0 group-hover:opacity-100 group-hover:gap-2 transition-all duration-300">فتح <ChevronLeft className="w-3.5 h-3.5" /></div>
              </div>
            </button>
          ))}
        </div>
      </div>

      <button type="button" onClick={handleInstall} className="desktop-download-fab group fixed bottom-5 left-1/2 -translate-x-1/2 z-40 inline-flex items-center gap-3 rounded-2xl bg-indigo-600 px-5 py-3.5 text-white shadow-xl shadow-indigo-600/30 transition-all hover:-translate-y-1 hover:bg-indigo-700 hover:shadow-2xl focus:outline-none focus:ring-4 focus:ring-indigo-500/30" aria-label="تثبيت شاطر كتطبيق للكمبيوتر">
        <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-white/15"><Download className="h-5 w-5 transition-transform group-hover:translate-y-0.5" /></span>
        <span className="text-right"><span className="block text-sm font-extrabold">تثبيت التطبيق الآن</span><span className="block text-[11px] text-indigo-100">اضغط للتثبيت مباشرة</span></span>
      </button>

      {installOpen && (
        <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-4 bg-slate-950/60 backdrop-blur-sm" role="dialog" aria-modal="true" aria-labelledby="desktop-install-title" onClick={() => setInstallOpen(false)}>
          <div className="w-full max-w-lg rounded-3xl bg-white dark:bg-slate-900 shadow-2xl p-6 sm:p-7 animate-[cardMount_0.25s_ease-out]" onClick={(event) => event.stopPropagation()}>
            <div className="flex items-start justify-between gap-4 mb-6">
              <div><div className="inline-flex items-center gap-2 text-indigo-600 dark:text-indigo-400 text-sm font-bold mb-2"><Store className="w-4 h-4" /> شاطر كتطبيق PWA</div><h2 id="desktop-install-title" className="text-2xl font-extrabold text-slate-900 dark:text-white">ثبّت شاطر على الكمبيوتر</h2><p className="text-sm text-slate-500 dark:text-slate-400 mt-1">يُفتح في نافذة مستقلة ويعمل على Windows وmacOS وLinux.</p></div>
              <button type="button" onClick={() => setInstallOpen(false)} className="btn-ghost p-2 -mt-2 -mr-2" aria-label="إغلاق"><X className="w-5 h-5" /></button>
            </div>
            <div className="space-y-3 text-sm text-slate-600 dark:text-slate-300">
              <div className="flex gap-3 rounded-2xl bg-indigo-50 dark:bg-indigo-950/40 p-4"><Check className="w-5 h-5 shrink-0 text-indigo-600" /><span>في Chrome أو Edge اضغط أيقونة التثبيت بجوار شريط العنوان، ثم اختر <strong>تثبيت</strong>.</span></div>
              <div className="flex gap-3 rounded-2xl bg-slate-50 dark:bg-slate-800 p-4"><MonitorDown className="w-5 h-5 shrink-0 text-slate-500" /><span>في Safari على macOS اختر <strong>File ثم Add to Dock</strong>.</span></div>
              <p className="text-xs text-slate-500 dark:text-slate-400 text-center pt-2">بعد التثبيت سيظهر شاطر كتطبيق مستقل في قائمة تطبيقات الكمبيوتر.</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
