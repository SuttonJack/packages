import * as AvatarPrimitive from '@radix-ui/react-avatar'
import * as React from 'react'

import { Status } from '../../components'
import { VariantProps, CSS } from '../../stitches.config'

import { StyledAvatar } from './Avatar.styles'

type StatusVariants = React.ComponentProps<typeof Status>
type StatusColors = Pick<StatusVariants, 'variant'>

type AvatarVariants = VariantProps<typeof StyledAvatar>
type AvatarPrimitiveProps = React.ComponentProps<typeof AvatarPrimitive.Root>
type AvatarOwnProps = AvatarPrimitiveProps &
  AvatarVariants & {
    css?: CSS
    alt?: string
    src?: string
    fallback?: React.ReactNode
    status?: StatusColors['variant']
  }

export type { AvatarOwnProps }
