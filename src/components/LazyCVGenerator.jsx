import { lazy, Suspense } from 'react'
import { motion } from 'framer-motion'

// Lazy load components
const CVGenerator = lazy(() => import('./CVGenerator'))

const LazyCVGenerator = (props) => {
  return (
    <Suspense fallback={
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
      >
        <div className="bg-white rounded-xl p-6">
          <div className="w-6 h-6 border-2 border-primary-600 border-t-transparent rounded-full animate-spin"></div>
        </div>
      </motion.div>
    }>
      <CVGenerator {...props} />
    </Suspense>
  )
}

export default LazyCVGenerator
