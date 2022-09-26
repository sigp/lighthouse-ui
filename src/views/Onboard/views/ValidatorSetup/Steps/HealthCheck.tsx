import Typography from '../../../../../components/Typography/Typography'
import DiagnosticSummaryCard from '../../../../../components/DiagnosticSummaryCard/DiagnosticSummaryCard'
import { DiagnosticRate, DiagnosticType } from '../../../../../constants/enums'
import DiagnosticCard from '../../../../../components/DiagnosticCard/DiagnosticCard'
import DeviceHealth from '../../../../../components/HealthCheck/DeviceHealth'
import { Suspense } from 'react'

const HealthCheck = () => {
  return (
    <div className='w-full h-full flex items-center justify-center'>
      <div className='w-full max-w-6xl'>
        <div className='flex space-x-2 items-center'>
          <i className='text-caption2 bi-arrow-left' />
          <Typography type='text-caption2' className='uppercase'>
            Configure / <span className='font-bold'>health check</span>
          </Typography>
        </div>
        <Typography
          type='text-subtitle1'
          fontWeight='font-light'
          color='text-transparent'
          className='primary-gradient-text'
        >
          Validator Health Check
        </Typography>
        <hr className='w-full h-px border-dark100 my-2' />
        <Suspense fallback={<div>Loading...</div>}>
          <DeviceHealth />
        </Suspense>
        <div className='w-full h-24 flex space-x-2 mt-2'>
          <DiagnosticSummaryCard type={DiagnosticType.NETWORK} rate={DiagnosticRate.GREAT} />
          <DiagnosticCard
            maxHeight='h-full'
            title='Disk'
            metric='511GB'
            subTitle='22% Utilization'
            status='bg-success'
          />
          <DiagnosticCard
            maxHeight='h-full'
            title='CPU'
            metric='1.9GHZ'
            subTitle='13% Utilization'
            status='bg-warning'
          />
          <DiagnosticCard
            maxHeight='h-full'
            title='RAM'
            metric='15.9GB'
            subTitle='48% Utilization'
            status='bg-error'
          />
        </div>
      </div>
    </div>
  )
}

export default HealthCheck