import { useState, type FormEvent } from 'react';
import { Card } from '../components/Card';
import { Button } from '../components/Button';
import { Input } from '../components/Input';
import { Accordion } from '../components/Accordion';
import {
    Search,
    Mail,
    Clock,
    BookOpen,
    Code,
    Users,
    Activity,
    ExternalLink,
    Phone,
    MessageCircle,
    FileText,
    Upload
} from 'lucide-react';

export function Support() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        category: 'technical',
        message: ''
    });
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        // Simulate API call
        await new Promise(resolve => setTimeout(resolve, 2000));
        alert('感谢您的消息!我们会尽快回复。');
        setIsSubmitting(false);
        setFormData({ name: '', email: '', subject: '', category: 'technical', message: '' });
    };

    const faqs = [
        {
            title: '如何开始使用 VoiceAgent?',
            content: (
                <p>
                    首先,您需要创建一个账户并获取 API 密钥。然后按照我们的{' '}
                    <a href="#" className="text-purple-400 hover:text-purple-300 underline">快速入门指南</a>
                    {' '}进行配置。通常只需 5 分钟即可完成初始设置。
                </p>
            )
        },
        {
            title: '支持哪些编程语言?',
            content: (
                <p>
                    VoiceAgent 提供多种语言的 SDK,包括 Python、JavaScript、Go、Java 和 Swift。
                    您也可以直接使用 REST API 与任何支持 HTTP 的语言集成。
                </p>
            )
        },
        {
            title: '如何处理语音识别错误?',
            content: (
                <div>
                    <p className="mb-2">我们建议采取以下措施提高识别准确率:</p>
                    <ul className="list-disc list-inside space-y-1 text-slate-400">
                        <li>使用高质量的音频输入设备</li>
                        <li>确保环境噪音较低</li>
                        <li>提供自定义词汇表以改善特定领域术语的识别</li>
                        <li>使用适合您使用场景的语言模型</li>
                    </ul>
                </div>
            )
        },
        {
            title: 'API 有速率限制吗?',
            content: (
                <p>
                    是的,不同的订阅计划有不同的速率限制。免费版每分钟 10 次请求,
                    专业版每分钟 100 次请求,企业版可自定义。您可以在{' '}
                    <a href="#" className="text-purple-400 hover:text-purple-300 underline">定价页面</a>
                    {' '}查看详细信息。
                </p>
            )
        },
        {
            title: '支持实时语音通话吗?',
            content: (
                <p>
                    是的!VoiceAgent 支持实时双向语音对话,延迟低于 300ms。
                    我们使用 WebRTC 和优化的语音处理管道确保流畅的对话体验。
                </p>
            )
        },
        {
            title: '数据安全和隐私如何保障?',
            content: (
                <p>
                    我们非常重视数据安全。所有数据传输都使用 TLS 1.3 加密,
                    语音数据在处理后会根据您的设置自动删除或加密存储。
                    我们符合 GDPR、CCPA 等隐私法规。详见{' '}
                    <a href="#" className="text-purple-400 hover:text-purple-300 underline">隐私政策</a>。
                </p>
            )
        },
        {
            title: '如何升级或取消订阅?',
            content: (
                <p>
                    您可以随时在账户设置中升级或降级订阅计划。取消订阅后,
                    您的服务将在当前计费周期结束时停止,不会产生额外费用。
                </p>
            )
        },
        {
            title: '提供技术支持吗?',
            content: (
                <p>
                    所有付费计划都包含技术支持。专业版用户可在 24 小时内收到回复,
                    企业版用户享有专属支持通道和更快的响应时间(2 小时内)。
                </p>
            )
        }
    ];

    const quickLinks = [
        {
            icon: <BookOpen className="w-6 h-6" />,
            title: '开发文档',
            description: '完整的 API 参考和集成指南',
            link: '#'
        },
        {
            icon: <Code className="w-6 h-6" />,
            title: 'API 参考',
            description: '详细的接口文档和示例代码',
            link: '#'
        },
        {
            icon: <Users className="w-6 h-6" />,
            title: '社区论坛',
            description: '与其他开发者交流和分享经验',
            link: '#'
        },
        {
            icon: <Activity className="w-6 h-6" />,
            title: '系统状态',
            description: '实时查看服务可用性和性能',
            link: '#'
        }
    ];

    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
            {/* Hero Section */}
            <div className="relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-blue-600/20 blur-3xl"></div>
                <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16">
                    <div className="text-center">
                        <h1 className="text-5xl sm:text-6xl font-bold mb-6">
                            <span className="bg-gradient-to-r from-purple-400 to-blue-400 text-transparent bg-clip-text">
                                我们随时为您提供帮助
                            </span>
                        </h1>
                        <p className="text-xl text-slate-400 max-w-2xl mx-auto mb-8">
                            浏览常见问题、查阅文档,或直接联系我们的支持团队
                        </p>

                        {/* Search Bar */}
                        <div className="max-w-2xl mx-auto relative">
                            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-500" />
                            <input
                                type="text"
                                placeholder="搜索常见问题..."
                                className="w-full pl-12 pr-4 py-4 bg-slate-800/50 border border-slate-700 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200"
                            />
                        </div>
                    </div>
                </div>
            </div>

            {/* Quick Stats */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <Card className="text-center">
                        <Clock className="w-8 h-8 text-purple-400 mx-auto mb-3" />
                        <h3 className="text-2xl font-bold text-white mb-1">24 小时</h3>
                        <p className="text-slate-400">平均响应时间(专业版)</p>
                    </Card>
                    <Card className="text-center">
                        <MessageCircle className="w-8 h-8 text-blue-400 mx-auto mb-3" />
                        <h3 className="text-2xl font-bold text-white mb-1">98%</h3>
                        <p className="text-slate-400">客户满意度</p>
                    </Card>
                    <Card className="text-center">
                        <Users className="w-8 h-8 text-cyan-400 mx-auto mb-3" />
                        <h3 className="text-2xl font-bold text-white mb-1">10,000+</h3>
                        <p className="text-slate-400">活跃开发者</p>
                    </Card>
                </div>
            </div>

            {/* FAQ Section */}
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
                <div className="text-center mb-12">
                    <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                        常见问题
                    </h2>
                    <p className="text-slate-400">
                        快速找到您需要的答案
                    </p>
                </div>
                <Accordion items={faqs} />
            </div>

            {/* Contact Form */}
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
                <div className="text-center mb-12">
                    <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                        联系我们
                    </h2>
                    <p className="text-slate-400">
                        没有找到答案?发送消息给我们的支持团队
                    </p>
                </div>

                <Card>
                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <Input
                                label="姓名"
                                type="text"
                                value={formData.name}
                                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                placeholder="请输入您的姓名"
                                required
                            />
                            <Input
                                label="邮箱"
                                type="email"
                                value={formData.email}
                                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                placeholder="your.email@example.com"
                                required
                            />
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <Input
                                label="主题"
                                type="text"
                                value={formData.subject}
                                onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                                placeholder="问题的简短描述"
                                required
                            />
                            <div>
                                <label className="block text-sm font-medium text-slate-300 mb-2">
                                    类别
                                </label>
                                <select
                                    value={formData.category}
                                    onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                                    className="w-full px-4 py-3 bg-slate-800/50 border border-slate-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200"
                                >
                                    <option value="technical">技术支持</option>
                                    <option value="billing">账单问题</option>
                                    <option value="general">一般咨询</option>
                                    <option value="feedback">产品反馈</option>
                                </select>
                            </div>
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-slate-300 mb-2">
                                详细说明
                            </label>
                            <textarea
                                value={formData.message}
                                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                placeholder="请详细描述您的问题或需求..."
                                rows={6}
                                required
                                className="w-full px-4 py-3 bg-slate-800/50 border border-slate-700 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200 resize-none"
                            />
                        </div>

                        <div className="border-2 border-dashed border-slate-700 rounded-lg p-6 text-center hover:border-purple-500 transition-colors duration-200 cursor-pointer">
                            <Upload className="w-8 h-8 text-slate-500 mx-auto mb-2" />
                            <p className="text-slate-400 text-sm">
                                点击上传附件(可选)
                            </p>
                            <p className="text-slate-600 text-xs mt-1">
                                支持图片、日志文件等,最大 10MB
                            </p>
                        </div>

                        <Button type="submit" className="w-full" loading={isSubmitting}>
                            <Mail className="w-5 h-5 mr-2" />
                            发送消息
                        </Button>
                    </form>
                </Card>
            </div>

            {/* Technical Support Info */}
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
                <div className="text-center mb-12">
                    <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                        技术支持信息
                    </h2>
                </div>

                <Card>
                    <div className="space-y-6">
                        <div>
                            <label className="block text-sm font-medium text-slate-400 mb-2">
                                技术支持网址 (URL)
                                <span className="ml-2 text-slate-500">?</span>
                            </label>
                            <div className="relative">
                                <input
                                    type="text"
                                    value="https://support.voiceagent.ai"
                                    readOnly
                                    className="w-full px-4 py-3 bg-slate-900/50 border border-slate-700 rounded-lg text-white"
                                />
                                <div className="absolute right-4 top-3 text-xs text-slate-500">
                                    包含 App 支持信息的 URL
                                </div>
                            </div>
                            <p className="mt-2 text-sm text-slate-500">
                                包含 App 支持信息的 URL。在 App Store 发布 App 后,此 URL 将出现在 App 的产品页面。
                            </p>
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-slate-400 mb-2">
                                版本
                                <span className="ml-2 text-slate-500">?</span>
                            </label>
                            <input
                                type="text"
                                value="1.0"
                                readOnly
                                className="w-full px-4 py-3 bg-slate-900/50 border border-slate-700 rounded-lg text-white"
                            />
                        </div>

                        <div className="pt-4 border-t border-slate-700">
                            <h3 className="font-medium text-white mb-4 flex items-center">
                                <Phone className="w-5 h-5 mr-2 text-purple-400" />
                                其他联系方式
                            </h3>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                                <div>
                                    <p className="text-slate-400 mb-1">电子邮件</p>
                                    <a href="mailto:support@voiceagent.ai" className="text-purple-400 hover:text-purple-300">
                                        support@voiceagent.ai
                                    </a>
                                </div>
                                <div>
                                    <p className="text-slate-400 mb-1">工作时间</p>
                                    <p className="text-white">周一至周五 9:00-18:00 (GMT+8)</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </Card>
            </div>

            {/* Quick Links */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
                <div className="text-center mb-12">
                    <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                        快速链接
                    </h2>
                    <p className="text-slate-400">
                        探索更多资源
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {quickLinks.map((item, index) => (
                        <a
                            key={index}
                            href={item.link}
                            className="group"
                        >
                            <Card className="h-full flex flex-col items-center text-center p-8">
                                <div className="w-14 h-14 rounded-full bg-gradient-to-r from-purple-600 to-blue-600 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                                    {item.icon}
                                </div>
                                <h3 className="text-lg font-semibold text-white mb-2 flex items-center">
                                    {item.title}
                                    <ExternalLink className="w-4 h-4 ml-1 opacity-0 group-hover:opacity-100 transition-opacity" />
                                </h3>
                                <p className="text-slate-400 text-sm">{item.description}</p>
                            </Card>
                        </a>
                    ))}
                </div>
            </div>

            {/* Footer CTA */}
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
                <Card className="text-center p-12 bg-gradient-to-r from-purple-900/30 to-blue-900/30">
                    <FileText className="w-12 h-12 text-purple-400 mx-auto mb-4" />
                    <h3 className="text-2xl font-bold text-white mb-4">
                        需要企业级支持?
                    </h3>
                    <p className="text-slate-300 mb-6">
                        联系我们的销售团队,了解专属支持通道、SLA 保证和定制解决方案
                    </p>
                    <Button variant="outline" size="lg">
                        联系销售
                    </Button>
                </Card>
            </div>
        </div>
    );
}
