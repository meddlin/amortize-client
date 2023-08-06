
import CalculationForm from '../components/calculation-form';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center xs:p-6 sm:p-24">
      <h1 className="font-bold text-center xs:text-xl sm:text-2xl" role="heading">
        Amortization Calculator
      </h1>
      
      <div className="flex flex-col justify-start">
        <CalculationForm />
      </div>
    </main>
  )
}
