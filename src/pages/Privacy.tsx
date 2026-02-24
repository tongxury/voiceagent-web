import { Shield } from 'lucide-react';

export function Privacy() {
    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
            <div className="max-w-4xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
                {/* Header */}
                <div className="text-center mb-12">
                    <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-r from-purple-600 to-blue-600 mb-6">
                        <Shield className="w-8 h-8 text-white" />
                    </div>
                    <h1 className="text-4xl font-bold text-white mb-4">隐私政策</h1>
                    <p className="text-slate-400">最后更新日期：2026年2月12日</p>
                </div>

                {/* Content */}
                <div className="bg-slate-900/50 backdrop-blur-sm rounded-2xl border border-slate-800 p-8 space-y-8">
                    {/* Introduction */}
                    <section>
                        <p className="text-slate-300 leading-relaxed">
                            感谢您使用 灵犀（以下简称"本应用"或"我们"）。我们非常重视您的隐私，并致力于保护您的个人信息。本隐私政策将帮助您了解我们如何收集、使用、存储和保护您的信息。
                        </p>
                    </section>

                    {/* Section 1 */}
                    <section>
                        <h2 className="text-2xl font-bold text-white mb-4">1. 信息收集</h2>
                        <div className="space-y-4 text-slate-300">
                            <div>
                                <h3 className="text-lg font-semibold text-white mb-2">1.1 我们收集的信息</h3>
                                <ul className="list-disc list-inside space-y-2 ml-4">
                                    <li>账户信息：当您注册账户时，我们可能收集您的用户名、电子邮件地址等基本信息</li>
                                    <li>语音数据：为提供语音助手功能，我们会处理您的语音输入</li>
                                    <li>使用数据：包括您与应用的交互记录、使用时间、功能偏好等</li>
                                    <li>设备信息：设备型号、操作系统版本、唯一设备标识符等</li>
                                </ul>
                            </div>

                            <div>
                                <h3 className="text-lg font-semibold text-white mb-2">1.2 信息收集方式</h3>
                                <ul className="list-disc list-inside space-y-2 ml-4">
                                    <li>您直接提供的信息</li>
                                    <li>通过自动化技术收集的信息（如 Cookies、日志文件等）</li>
                                    <li>第三方服务提供商提供的信息</li>
                                </ul>
                            </div>
                        </div>
                    </section>

                    {/* Section 2 */}
                    <section>
                        <h2 className="text-2xl font-bold text-white mb-4">2. 信息使用</h2>
                        <div className="space-y-2 text-slate-300">
                            <p>我们使用收集的信息用于以下目的：</p>
                            <ul className="list-disc list-inside space-y-2 ml-4">
                                <li>提供、维护和改进我们的服务</li>
                                <li>处理您的语音请求并提供个性化响应</li>
                                <li>发送服务相关的通知</li>
                                <li>进行数据分析以优化用户体验</li>
                                <li>检测、预防和解决技术问题</li>
                                <li>保护用户和服务的安全</li>
                            </ul>
                        </div>
                    </section>

                    {/* Section 3 */}
                    <section>
                        <h2 className="text-2xl font-bold text-white mb-4">3. 信息共享</h2>
                        <div className="space-y-4 text-slate-300">
                            <p>我们不会将您的个人信息出售给第三方。我们仅在以下情况下共享您的信息：</p>
                            <ul className="list-disc list-inside space-y-2 ml-4">
                                <li>获得您的明确同意</li>
                                <li>为完成服务所必需的第三方服务提供商（如云存储、数据分析）</li>
                                <li>遵守法律法规、法律程序或政府要求</li>
                                <li>保护我们或他人的权利、财产或安全</li>
                            </ul>
                        </div>
                    </section>

                    {/* Section 4 */}
                    <section>
                        <h2 className="text-2xl font-bold text-white mb-4">4. 数据安全</h2>
                        <div className="space-y-2 text-slate-300">
                            <p>我们采取以下措施保护您的数据安全：</p>
                            <ul className="list-disc list-inside space-y-2 ml-4">
                                <li>使用加密技术保护数据传输</li>
                                <li>实施访问控制和身份验证机制</li>
                                <li>定期进行安全审计和漏洞扫描</li>
                                <li>员工经过隐私和安全培训</li>
                            </ul>
                            <p className="mt-4">
                                虽然我们采取合理措施保护您的信息，但没有任何互联网传输或电子存储方法是100%安全的。
                            </p>
                        </div>
                    </section>

                    {/* Section 5 */}
                    <section>
                        <h2 className="text-2xl font-bold text-white mb-4">5. 数据保留</h2>
                        <div className="text-slate-300">
                            <p>
                                我们仅在实现本隐私政策所述目的所需的时间内保留您的个人信息。当您删除账户时，我们将在合理时间内删除或匿名化您的个人信息，除非法律要求我们保留这些信息。
                            </p>
                        </div>
                    </section>

                    {/* Section 6 */}
                    <section>
                        <h2 className="text-2xl font-bold text-white mb-4">6. 您的权利</h2>
                        <div className="space-y-2 text-slate-300">
                            <p>根据适用的数据保护法律，您享有以下权利：</p>
                            <ul className="list-disc list-inside space-y-2 ml-4">
                                <li>访问和获取您的个人信息副本</li>
                                <li>更正不准确或不完整的信息</li>
                                <li>删除您的个人信息</li>
                                <li>限制或反对处理您的个人信息</li>
                                <li>数据可携带权</li>
                                <li>撤回同意（在处理基于同意的情况下）</li>
                            </ul>
                            <p className="mt-4">
                                如需行使这些权利，请通过下方联系方式与我们联系。
                            </p>
                        </div>
                    </section>

                    {/* Section 7 */}
                    <section>
                        <h2 className="text-2xl font-bold text-white mb-4">7. 儿童隐私</h2>
                        <div className="text-slate-300">
                            <p>
                                我们的服务不面向13岁以下的儿童。如果您发现我们无意中收集了儿童的个人信息，请联系我们，我们将及时删除该信息。
                            </p>
                        </div>
                    </section>

                    {/* Section 8 */}
                    <section>
                        <h2 className="text-2xl font-bold text-white mb-4">8. 第三方服务</h2>
                        <div className="text-slate-300">
                            <p>
                                我们的应用可能包含指向第三方网站或服务的链接。我们不对这些第三方的隐私做法负责。我们建议您在使用任何第三方服务时查看其隐私政策。
                            </p>
                        </div>
                    </section>

                    {/* Section 9 */}
                    <section>
                        <h2 className="text-2xl font-bold text-white mb-4">9. 跨境数据传输</h2>
                        <div className="text-slate-300">
                            <p>
                                您的信息可能会被传输到您所在国家/地区以外的服务器并在那里进行处理。我们将采取适当措施确保您的数据根据本隐私政策和适用法律得到安全处理。
                            </p>
                        </div>
                    </section>

                    {/* Section 10 */}
                    <section>
                        <h2 className="text-2xl font-bold text-white mb-4">10. 隐私政策更新</h2>
                        <div className="text-slate-300">
                            <p>
                                我们可能会不时更新本隐私政策。我们会在本页面发布新的隐私政策并更新"最后更新日期"。重大变更时，我们会通过应用内通知或电子邮件提前通知您。
                            </p>
                        </div>
                    </section>

                    {/* Section 11 */}
                    <section>
                        <h2 className="text-2xl font-bold text-white mb-4">11. 联系我们</h2>
                        <div className="text-slate-300">
                            <p className="mb-4">
                                如果您对本隐私政策有任何问题、疑虑或建议，请通过以下方式联系我们：
                            </p>
                            <div className="bg-slate-800/50 rounded-lg p-4 space-y-2">
                                <p>电子邮件：<a href="mailto:privacy@灵犀.example.com" className="text-purple-400 hover:text-purple-300 transition-colors">privacy@larksings.com</a></p>
                                <p className="text-sm text-slate-400">我们将在收到您的请求后尽快回复。</p>
                            </div>
                        </div>
                    </section>

                    {/* Footer Note */}
                    <div className="pt-8 border-t border-slate-800">
                        <p className="text-sm text-slate-400 text-center">
                            本隐私政策以中文撰写。如有任何语言版本之间的不一致，以中文版本为准。
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
