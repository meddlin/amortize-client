
import CalculationForm from '../components/calculation-form';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      <h1 className="text-2xl font-bold text-center" role="heading">
        Amortization Calculator
      </h1>
      
      <div className="flex flex-col justify-start">
        <CalculationForm />
      </div>
    </main>
  )
}
