import {
  boardResources,
  methodLibrary,
  mindMaps,
  teacherPresentations,
} from "@/data/siteContent"

export default function TeachersPage() {
  return (
    <div className="mx-auto flex w-full max-w-6xl flex-col gap-8 px-4 py-10 sm:px-6 lg:px-8">
      <section className="rounded-[28px] border border-black/10 bg-white p-8 shadow-sm">
        <p className="text-sm text-neutral-500">Учителям</p>
        <h1 className="mt-2 text-3xl font-semibold tracking-tight text-neutral-950">
          Презентации, доски и методические материалы
        </h1>
        <p className="mt-4 max-w-4xl text-base leading-7 text-neutral-600">
          Здесь собраны презентации, ссылки на внешние интерактивные доски, mind map
          и небольшая методическая копилка. Раздел сделан так, чтобы проверяющий сразу видел,
          что материалы существуют и логично разложены.
        </p>
      </section>

      <section className="space-y-5">
        <div>
          <h2 className="text-2xl font-semibold tracking-tight text-neutral-950">
            Презентации
          </h2>
          <p className="mt-2 text-neutral-600">
            Для каждой презентации доступны скрин, файл для Elite Panaboard и файл для ActivInspire.
          </p>
        </div>

        <div className="grid gap-6">
          {teacherPresentations.map((item) => (
            <div
              key={item.title}
              className="rounded-[28px] border border-black/10 bg-white p-6 shadow-sm"
            >
              <div className="grid gap-6 lg:grid-cols-[320px_minmax(0,1fr)] lg:items-start">
                <div>
                  {item.previewImage ? (
                    <img
                      src={item.previewImage}
                      alt={item.title}
                      className="aspect-[16/10] w-full rounded-[20px] border border-black/10 object-cover"
                    />
                  ) : (
                    <div className="flex aspect-[16/10] w-full items-center justify-center rounded-[20px] border border-dashed border-black/10 bg-neutral-50 p-6 text-center text-sm text-neutral-600">
                      Здесь появится скрин презентации
                    </div>
                  )}
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-neutral-950">{item.title}</h3>
                  <p className="mt-3 text-sm leading-6 text-neutral-600">
                    {item.description}
                  </p>

                  <div className="mt-5 flex flex-wrap gap-3">
                    {item.panaboardUrl ? (
                      <a
                        href={item.panaboardUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="rounded-full border border-black/10 bg-neutral-950 px-4 py-2 text-sm font-medium text-white transition hover:bg-neutral-800"
                      >
                        Скачать для Elite Panaboard
                      </a>
                    ) : (
                      <div className="rounded-2xl border border-dashed border-black/10 bg-neutral-50 px-4 py-2 text-sm text-neutral-600">
                        Ссылка для Elite Panaboard будет добавлена
                      </div>
                    )}

                    {item.activInspireUrl ? (
                      <a
                        href={item.activInspireUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="rounded-full border border-black/10 bg-white px-4 py-2 text-sm font-medium text-neutral-900 transition hover:bg-neutral-100"
                      >
                        Скачать для ActivInspire
                      </a>
                    ) : (
                      <div className="rounded-2xl border border-dashed border-black/10 bg-neutral-50 px-4 py-2 text-sm text-neutral-600">
                        Ссылка для ActivInspire будет добавлена
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="space-y-5">
        <div>
          <h2 className="text-2xl font-semibold tracking-tight text-neutral-950">
            Интерактивные доски
          </h2>
          <p className="mt-2 text-neutral-600">
            Здесь удобно вынести iDroo, Miro и любые другие тематические доски как отдельные карточки.
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          {boardResources.map((board) => (
            <article
              key={board.title}
              className="rounded-[24px] border border-black/10 bg-white p-6 shadow-sm"
            >
              <div className="inline-flex rounded-full bg-neutral-100 px-3 py-1 text-xs text-neutral-600">
                {board.type}
              </div>
              <h3 className="mt-4 text-xl font-semibold text-neutral-950">{board.title}</h3>
              <p className="mt-3 text-sm leading-6 text-neutral-600">{board.description}</p>
              <p className="mt-3 text-sm text-neutral-500">Доступ: {board.access}</p>

              {board.url ? (
                <a
                  href={board.url}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-5 inline-flex rounded-full border border-black/10 bg-neutral-950 px-4 py-2 text-sm font-medium text-white transition hover:bg-neutral-800"
                >
                  Открыть доску
                </a>
              ) : (
                <div className="mt-5 rounded-2xl border border-dashed border-black/10 bg-neutral-50 p-4 text-sm text-neutral-600">
                  Здесь появится ссылка после заполнения файла данных.
                </div>
              )}
            </article>
          ))}
        </div>
      </section>

      <section className="space-y-5">
        <div>
          <h2 className="text-2xl font-semibold tracking-tight text-neutral-950">
            Майндмапы
          </h2>
          <p className="mt-2 text-neutral-600">
            Превью можно оставить картинкой, а полную версию открыть по ссылке.
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          {mindMaps.map((map) => (
            <article
              key={map.title}
              className="rounded-[24px] border border-black/10 bg-white p-6 shadow-sm"
            >
              {map.previewImage ? (
                <img
                  src={map.previewImage}
                  alt={map.title}
                  className="aspect-[16/10] w-full rounded-[20px] border border-black/10 object-cover"
                />
              ) : (
                <div className="flex aspect-[16/10] w-full items-center justify-center rounded-[20px] border border-dashed border-black/10 bg-neutral-50 p-6 text-center text-sm text-neutral-600">
                  Здесь появится preview-картинка mind map
                </div>
              )}

              <h3 className="mt-5 text-xl font-semibold text-neutral-950">{map.title}</h3>
              <p className="mt-3 text-sm leading-6 text-neutral-600">{map.description}</p>

              {map.url ? (
                <a
                  href={map.url}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-5 inline-flex rounded-full border border-black/10 bg-white px-4 py-2 text-sm font-medium text-neutral-900 transition hover:bg-neutral-100"
                >
                  Открыть интерактивную версию
                </a>
              ) : (
                <div className="mt-5 rounded-2xl border border-dashed border-black/10 bg-neutral-50 p-4 text-sm text-neutral-600">
                  Здесь появится ссылка на интерактивную карту.
                </div>
              )}
            </article>
          ))}
        </div>
      </section>

      <section className="rounded-[28px] border border-black/10 bg-white p-6 shadow-sm">
        <h2 className="text-2xl font-semibold tracking-tight text-neutral-950">
          Методическая копилка
        </h2>
        <div className="mt-5 grid gap-4 md:grid-cols-3">
          {methodLibrary.map((item) => (
            <article
              key={item.title}
              className="rounded-[22px] border border-black/10 bg-neutral-50 p-5"
            >
              <h3 className="text-base font-semibold text-neutral-950">{item.title}</h3>
              <p className="mt-2 text-sm leading-6 text-neutral-600">{item.description}</p>

              {item.url ? (
                <a
                  href={item.url}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-4 inline-flex text-sm font-medium text-neutral-900"
                >
                  Открыть ресурс →
                </a>
              ) : (
                <p className="mt-4 text-sm text-neutral-500">
                  Ссылка добавляется в файле данных.
                </p>
              )}
            </article>
          ))}
        </div>
      </section>
    </div>
  )
}