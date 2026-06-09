import React from 'react'
import { Link } from 'react-router-dom'
import { Utensils, ShoppingCart, CreditCard } from 'lucide-react'

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 text-slate-300 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-6 py-12 lg:py-16">
        
        {/* Main Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-8 pb-10 border-b border-slate-800">
          
          {/* Brand/Vision Section */}
          <div className="md:col-span-1 flex flex-col gap-3">
            <h2 className="text-xl font-black tracking-tight text-white flex items-center gap-1">
              <span className="bg-linear-to-r from-orange-500 to-amber-400 bg-clip-text text-transparent">JAHA</span>
              <span className="text-xs font-bold tracking-[0.2em] text-slate-400 uppercase ml-1">Foods</span>
            </h2>
            <p className="text-sm text-slate-400 leading-relaxed max-w-sm">
              The best food comes with a lot of fresh feeling and good luck. Try feasting with food variety from Jaha to elevate your daily dining.
            </p>
          </div>

          {/* Navigation Links Column */}
          <div className="flex flex-col gap-4">
            <h3 className="text-xs font-bold uppercase tracking-[0.15em] text-orange-400">
              Quick Links
            </h3>
            <nav className="flex flex-col gap-2.5 text-sm font-medium">
              <Link 
                to="/meals" 
                className="flex items-center gap-1.5 hover:text-white hover:translate-x-1 transition-all duration-200"
              >
                <Utensils size={14} className="text-slate-500" />
                Explore Meals
              </Link>
              <Link 
                to="/cart" 
                className="flex items-center gap-1.5 hover:text-white hover:translate-x-1 transition-all duration-200"
              >
                <ShoppingCart size={14} className="text-slate-500" />
                Your Cart
              </Link>
              <Link 
                to="/checkout" 
                className="flex items-center gap-1.5 hover:text-white hover:translate-x-1 transition-all duration-200"
              >
                <CreditCard size={14} className="text-slate-500" />
                Checkout Process
              </Link>
            </nav>
          </div>

          {/* Operating Hours / Quick Info Column */}
          <div className="flex flex-col gap-4">
            <h3 className="text-xs font-bold uppercase tracking-[0.15em] text-orange-400">
              Service Hours
            </h3>
            <ul className="text-sm text-slate-400 space-y-2">
              <li className="flex justify-between border-b border-slate-800/50 pb-1">
                <span>Mon - Sat</span>
                <span className="text-white font-medium">7:00 AM - 10:00 PM</span>
              </li>
              <li className="flex justify-between">
                <span>Sunday</span>
                <span className="text-amber-500 font-medium">Closed</span>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar: Copyright & Terms */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>© {currentYear} Jaha Foods. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="" className="hover:text-slate-300 transition">Privacy Policy</a>
            <a href="" className="hover:text-slate-300 transition">Terms of Service</a>
          </div>
        </div>

      </div>
    </footer>
  )
}

export default Footer