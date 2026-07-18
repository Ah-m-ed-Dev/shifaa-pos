import { Button } from '@/components/ui/Button'

export default function DashboardPage() {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-6">لوحة التحكم</h1>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        {['إجمالي المبيعات', 'الأرباح', 'عدد الفواتير', 'منتهي الصلاحية'].map((title) => (
          <div key={title} className="bg-white p-6 rounded-xl shadow-sm border">
            <p className="text-gray-500 text-sm">{title}</p>
            <p className="text-2xl font-bold mt-2">0</p>
          </div>
        ))}
      </div>
      
      {/* Test Button */}
      <Button className="mt-6">اختبار الزر</Button>
    </div>
  )
}
