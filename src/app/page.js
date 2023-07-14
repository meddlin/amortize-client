
import CalculationForm from '../components/calculation-form';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1 className="text-4xl font-bold text-center" role="heading">
        Amortization Calculator
      </h1>
      
      <CalculationForm />
    </main>
  )
}
