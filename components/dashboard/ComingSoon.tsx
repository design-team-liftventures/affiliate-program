export function ComingSoon({ title }: { title: string }) {
  return (
    <div className="flex min-h-[50vh] flex-col items-center justify-center text-center">
      <h1 className="text-h4 font-medium text-text-primary">{title}</h1>
      <p className="mt-2 text-body text-text-secondary">
        This section is coming soon.
      </p>
    </div>
  )
}
