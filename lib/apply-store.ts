import { create } from 'zustand'
import { persist } from 'zustand/middleware'
import type { Step1Data, Step2Data, Step3Data } from '@/types/affiliate'

interface ApplyState {
  currentStep: 1 | 2 | 3 | 4
  step1: Step1Data | null
  step2: Step2Data | null
  step3: Step3Data | null
  setStep1: (data: Step1Data) => void
  setStep2: (data: Step2Data) => void
  setStep3: (data: Step3Data) => void
  goToStep: (step: 1 | 2 | 3 | 4) => void
  reset: () => void
}

export const useApplyStore = create<ApplyState>()(
  persist(
    (set) => ({
      currentStep: 1,
      step1: null,
      step2: null,
      step3: null,
      setStep1: (data) => set({ step1: data, currentStep: 2 }),
      setStep2: (data) => set({ step2: data, currentStep: 3 }),
      setStep3: (data) => set({ step3: data, currentStep: 4 }),
      goToStep: (step) => set({ currentStep: step }),
      reset: () =>
        set({ currentStep: 1, step1: null, step2: null, step3: null }),
    }),
    { name: 'affiliate-apply-form' }
  )
)
