'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { LayoutDashboard, Package, ShoppingCart, FileText, BarChart3, Settings } from 'lucide-react'
import { cn } from '@/lib/utils'

const navItems = [
  { icon: LayoutDashboard, label: 'الرئيسية', href: '/dashboard' },
  { icon: Package, label: 'المخزون', href: '/dashboard/medicines' },
  { icon: ShoppingCart, label: 'نقطة البيع', href: '/dashboard/pos' },
  { icon: FileText, label: 'الفواتير', href: '/dashboard/invoices' },
  { icon: BarChart3, label: 'التقارير', href: '/dashboard/reports' },
  { icon: Settings, label: 'الإعدادات', href: '/dashboard/settings' },
]

export function Sidebar() {
  const pathname = usePathname()
  
  return (
    <aside className="w-64 bg-white border-l border-gray-200 h-screen fixed right-0 top-0 p-4 overflow-y-auto">
      <div className="mb-8 px-2">
        <h1 className="text-2xl font-bold text-blue-600">صيدليتي</h1>
        <p className="text-sm text-gray-500">نظام إدارة الصيدليات</p>
      </div>
      
      <nav className="space-y-1">
        {navItems.map((item) => {
          const isActive = pathname === item.href
          return (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "flex items-center gap-3 px-4 py-3 rounded-lg transition-colors",
                isActive 
                  ? "bg-blue-50 text-blue-600" 
                  : "text-gray-600 hover:bg-gray-50"
              )}
            >
              <item.icon size={20} />
              <span>{item.label}</span>
            </Link>
          )
        })}
      </nav>
    </aside>
  )
   }
