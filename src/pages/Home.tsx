import { Link } from 'react-router-dom';
import { Button } from '../components/Button';

export function Home() {
    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 flex items-center justify-center px-4">
            <div className="max-w-4xl text-center">
                <img 
                    src="/app-icon.png" 
                    alt="灵犀" 
                    className="inline-block w-20 h-20 rounded-3xl object-cover shadow-2xl mb-8" 
                />

                <h1 className="text-5xl sm:text-7xl font-bold mb-6">
                    <span className="bg-gradient-to-r from-purple-400 via-blue-400 to-cyan-400 text-transparent bg-clip-text">
                        灵犀
                    </span>
                </h1>

                <p className="text-xl sm:text-2xl text-slate-300 mb-4">
                    智能语音助理配置平台
                </p>

                <p className="text-slate-400 mb-12 max-w-2xl mx-auto">
                    通过先进的 AI 技术,为您的应用添加自然、流畅的语音交互能力。
                    支持多语言识别、实时对话和个性化配置。
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                    <Link to="/support">
                        <Button size="lg">
                            访问支持中心
                        </Button>
                    </Link>
                    {/* <Button variant="outline" size="lg">
                        查看文档
                    </Button> */}
                </div>

                <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
                    <div className="bg-slate-800/30 backdrop-blur-sm rounded-xl p-6 border border-slate-700/50">
                        <h3 className="text-lg font-semibold text-white mb-2">🎯 高精度识别</h3>
                        <p className="text-slate-400 text-sm">
                            采用最新的深度学习模型,支持多种语言和方言,识别准确率达 95%+
                        </p>
                    </div>

                    <div className="bg-slate-800/30 backdrop-blur-sm rounded-xl p-6 border border-slate-700/50">
                        <h3 className="text-lg font-semibold text-white mb-2">⚡ 实时响应</h3>
                        <p className="text-slate-400 text-sm">
                            超低延迟处理,端到端延迟小于 300ms,提供流畅的对话体验
                        </p>
                    </div>

                    <div className="bg-slate-800/30 backdrop-blur-sm rounded-xl p-6 border border-slate-700/50">
                        <h3 className="text-lg font-semibold text-white mb-2">🔧 灵活定制</h3>
                        <p className="text-slate-400 text-sm">
                            支持自定义词汇表、语言模型和对话流程,满足各种业务场景需求
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
