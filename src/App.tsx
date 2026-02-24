import { BrowserRouter, Routes, Route, Link, useLocation } from 'react-router-dom';
import { Home } from './pages/Home';
import { Support } from './pages/Support';
import { Privacy } from './pages/Privacy';
import { HelpCircle, Shield } from 'lucide-react';

function Navigation() {
  const location = useLocation();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-slate-900/80 backdrop-blur-md border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center space-x-2 group">
            <img src="/app-icon.png" alt="灵犀" className="w-10 h-10 rounded-lg object-cover shadow-lg group-hover:scale-110 transition-transform duration-200" />
            <span className="text-xl font-bold text-white">灵犀</span>
          </Link>

          <div className="flex items-center space-x-1">
            <Link
              to="/"
              className={`px-4 py-2 rounded-lg flex items-center space-x-2 transition-colors duration-200 ${location.pathname === '/'
                ? 'bg-slate-800 text-white'
                : 'text-slate-400 hover:text-white hover:bg-slate-800/50'
                }`}
            >
              <img src="/app-icon.png" alt="首页" className="w-4 h-4 rounded-[4px] object-cover" />
              <span>首页</span>
            </Link>
            <Link
              to="/support"
              className={`px-4 py-2 rounded-lg flex items-center space-x-2 transition-colors duration-200 ${location.pathname === '/support'
                ? 'bg-slate-800 text-white'
                : 'text-slate-400 hover:text-white hover:bg-slate-800/50'
                }`}
            >
              <HelpCircle className="w-4 h-4" />
              <span>支持</span>
            </Link>
            <Link
              to="/privacy"
              className={`px-4 py-2 rounded-lg flex items-center space-x-2 transition-colors duration-200 ${location.pathname === '/privacy'
                ? 'bg-slate-800 text-white'
                : 'text-slate-400 hover:text-white hover:bg-slate-800/50'
                }`}
            >
              <Shield className="w-4 h-4" />
              <span>隐私政策</span>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

function App() {
  return (
    <BrowserRouter>
      <div className="pt-16">
        <Navigation />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/support" element={<Support />} />
          <Route path="/privacy" element={<Privacy />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
