import { createMachine, interpret } from 'xstate'
import { useActor, useMachine, useService } from '@xstate/vue'
import { checkoutMachine } from '@/machines/checkout-machine'

const checkoutService = interpret(checkoutMachine).start()

export const useCheckoutMachine = () => {
  return useActor(checkoutService)
}
