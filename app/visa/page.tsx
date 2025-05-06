// app/visa/page.tsx

export default function VisaIndexPage() {
    return (
      <div className="max-w-4xl mx-auto px-4 py-10">
        <h1 className="text-3xl font-bold text-primary mb-4">Visa Services</h1>
        <p className="mb-6">
          Welcome to our Australian visa services. Choose a visa type below to learn more about eligibility, requirements, and how Carmine Mercorella Legal can assist you.
        </p>
        <ul className="space-y-3">
          <li>
            <a href="/visa/partner-visa" className="text-blue-700 underline hover:text-blue-900">
              → Partner Visa
            </a>
          </li>
          <li>
            <a href="/visa/student-visa" className="text-blue-700 underline hover:text-blue-900">
              → Student Visa
            </a>
          </li>
          <li>
            <a href="/visa/skilled-visa" className="text-blue-700 underline hover:text-blue-900">
              → Skilled Visa
            </a>
          </li>
        </ul>
      </div>
    );
  }
  