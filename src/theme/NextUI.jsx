import { NextUIProvider, createTheme } from '@nextui-org/react'
import React from 'react'

const NextUI = ({ children }) => <NextUIProvider>{children}</NextUIProvider>

export default NextUI
