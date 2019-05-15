import Portfolio from './components/portfolio/Portfolio.vue'
import Stocks from './components/stocks/Stocks.vue'
import Home from './components/Home.vue'

export const routes = [
    {
        path: '/', 
        component: Home
    },
    {
        path: '/portfolio', 
        component: Portfolio
    },
    {
        path: '/stocks', 
        component: Stocks
    },
]