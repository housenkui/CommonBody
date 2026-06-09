export function MedicalAlert() {
  return (
    <div
      role="alert"
      className="border-b border-cb-alert-border bg-cb-alert-bg px-4 py-2.5 text-sm text-cb-text"
    >
      <strong className="font-semibold">重要提示：</strong>
      重症患者不适用，必须立刻就医。本站内容仅供参考，不构成医疗建议。
    </div>
  )
}
