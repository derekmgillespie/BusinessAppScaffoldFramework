import React from 'react';
import '../styles/Stepper.css';

export type StepItem = {
  label: string;
  description?: string;
};

export type StepperProps = {
  steps: StepItem[];
  currentStep: number;
  orientation?: 'horizontal' | 'vertical';
};

export function Stepper({ steps, currentStep, orientation = 'horizontal' }: StepperProps) {
  return (
    <div className={`ba-Stepper ba-Stepper--${orientation}`} role="navigation" aria-label="Progress steps">
      {steps.map((step, index) => {
        const stepNumber = index + 1;
        const isActive = stepNumber === currentStep;
        const isCompleted = stepNumber < currentStep;
        const status = isCompleted ? 'completed' : isActive ? 'active' : 'pending';

        return (
          <div key={index} className="ba-Stepper-item">
            <div className="ba-Stepper-step">
              <div 
                className={`ba-Stepper-circle ba-Stepper-circle--${status}`}
                aria-current={isActive ? 'step' : undefined}
              >
                {isCompleted ? '✓' : stepNumber}
              </div>
              {index < steps.length - 1 && (
                <div className={`ba-Stepper-line ba-Stepper-line--${isCompleted ? 'completed' : 'pending'}`} />
              )}
            </div>
            <div className="ba-Stepper-content">
              <div className={`ba-Stepper-label ba-Stepper-label--${status}`}>
                {step.label}
              </div>
              {step.description && (
                <div className="ba-Stepper-description">
                  {step.description}
                </div>
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
}
