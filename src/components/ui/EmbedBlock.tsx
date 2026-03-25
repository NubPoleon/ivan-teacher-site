type EmbedBlockProps = {
    title: string
    description?: string
    src?: string
    fallbackHref?: string
    heightClassName?: string
  }
  
  export default function EmbedBlock({
    title,
    description,
    src,
    fallbackHref,
    heightClassName = "h-[420px]",
  }: EmbedBlockProps) {
    const hasEmbed = Boolean(src)
  
    return (
      <section className="rounded-3xl border border-black/10 bg-white p-5 shadow-sm">
        <div className="mb-4">
          <h3 className="text-lg font-semibold text-neutral-950">{title}</h3>
          {description ? (
            <p className="mt-2 max-w-3xl text-sm leading-6 text-neutral-600">
              {description}
            </p>
          ) : null}
        </div>
  
        {hasEmbed ? (
          <div className={`overflow-hidden rounded-2xl border border-black/10 bg-neutral-50 ${heightClassName}`}>
            <iframe
              src={src}
              title={title}
              className="h-full w-full"
              loading="lazy"
              allowFullScreen
            />
          </div>
        ) : (
          <div className={`flex flex-col items-start justify-center rounded-2xl border border-dashed border-black/10 bg-neutral-50 p-6 text-sm text-neutral-600 ${heightClassName}`}>
            <p className="mb-3">
              Здесь появится встроенный блок после того, как ты вставишь embed-ссылку в файл данных.
            </p>
            {fallbackHref ? (
              <a
                href={fallbackHref}
                target="_blank"
                rel="noreferrer"
                className="rounded-full border border-black/10 bg-white px-4 py-2 text-sm font-medium text-neutral-900 transition hover:bg-neutral-100"
              >
                Открыть внешний ресурс
              </a>
            ) : null}
          </div>
        )}
      </section>
    )
  }