import React, { forwardRef } from 'react'
import { motion } from 'framer-motion'
import { useKeyboardNavigation, useAccessibility } from '../../hooks/useAccessibility'

interface AccessibleButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'ghost'
  size?: 'sm' | 'md' | 'lg'
  loading?: boolean
  icon?: React.ReactNode
  iconPosition?: 'left' | 'right'
  fullWidth?: boolean
  children: React.ReactNode
  ariaLabel?: string
  ariaDescribedBy?: string
  announceOnClick?: string
}

const AccessibleButton = forwardRef<HTMLButtonElement, AccessibleButtonProps>(
  (
    {
      variant = 'primary',
      size = 'md',
      loading = false,
      icon,
      iconPosition = 'left',
      fullWidth = false,
      children,
      className = '',
      onClick,
      ariaLabel,
      ariaDescribedBy,
      announceOnClick,
      disabled,
      onAnimationStart,
      onAnimationEnd,
      onDragStart,
      onDragEnd,
      onDrag,
      ...props
    },
    ref
  ) => {
    const { makeKeyboardAccessible } = useKeyboardNavigation()
    const { announceToScreenReader, preferences } = useAccessibility()

    const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
      if (disabled || loading) return

      if (announceOnClick) {
        announceToScreenReader(announceOnClick)
      }

      onClick?.(e)
    }

    const getVariantClasses = () => {
      switch (variant) {
        case 'primary':
          return 'btn-cyber'
        case 'secondary':
          return 'border border-neon-green/30 text-neon-green hover:bg-neon-green/10 hover:border-neon-green'
        case 'ghost':
          return 'text-gray-300 hover:text-neon-green hover:bg-neon-green/5'
        default:
          return 'btn-cyber'
      }
    }

    const getSizeClasses = () => {
      switch (size) {
        case 'sm':
          return 'px-4 py-2 text-sm'
        case 'md':
          return 'px-6 py-3'
        case 'lg':
          return 'px-8 py-4 text-lg'
        default:
          return 'px-6 py-3'
      }
    }

    const baseClasses = `
      relative inline-flex items-center justify-center
      font-semibold rounded-lg
      transition-all duration-300
      focus:outline-none focus:ring-2 focus:ring-neon-green focus:ring-offset-2 focus:ring-offset-dark-900
      disabled:opacity-50 disabled:cursor-not-allowed
      ${fullWidth ? 'w-full' : ''}
      ${getVariantClasses()}
      ${getSizeClasses()}
      ${className}
    `

    const keyboardProps = makeKeyboardAccessible(() => {
      if (!disabled && !loading) {
        const syntheticEvent = {
          currentTarget: (typeof ref === 'object' && ref?.current) || null,
          preventDefault: () => {},
          stopPropagation: () => {},
        } as React.MouseEvent<HTMLButtonElement>
        handleClick(syntheticEvent)
      }
    })

    return (
      <motion.button
        ref={ref}
        className={baseClasses}
        onClick={handleClick}
        disabled={disabled || loading}
        aria-label={ariaLabel || (typeof children === 'string' ? children : undefined)}
        aria-describedby={ariaDescribedBy}
        aria-busy={loading}
        whileHover={!disabled && !loading && !preferences.reducedMotion ? { scale: 1.05 } : {}}
        whileTap={!disabled && !loading && !preferences.reducedMotion ? { scale: 0.95 } : {}}
        {...keyboardProps}
        {...props}
      >
        {/* Loading Spinner */}
        {loading && (
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-5 h-5 border-2 border-current border-t-transparent rounded-full animate-spin" />
            <span className="sr-only">Loading...</span>
          </div>
        )}

        {/* Button Content */}
        <div className={`flex items-center space-x-2 ${loading ? 'opacity-0' : 'opacity-100'}`}>
          {icon && iconPosition === 'left' && (
            <span className="flex-shrink-0" aria-hidden="true">
              {icon}
            </span>
          )}
          
          <span>{children}</span>
          
          {icon && iconPosition === 'right' && (
            <span className="flex-shrink-0" aria-hidden="true">
              {icon}
            </span>
          )}
        </div>

        {/* Ripple Effect */}
        {!preferences.reducedMotion && (
          <span className="absolute inset-0 overflow-hidden rounded-lg">
            <span className="absolute inset-0 bg-white opacity-0 group-active:opacity-20 transition-opacity duration-150" />
          </span>
        )}
      </motion.button>
    )
  }
)

AccessibleButton.displayName = 'AccessibleButton'

export default AccessibleButton
