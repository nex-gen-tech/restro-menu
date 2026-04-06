import Image from "next/image";
import { PrintButton } from "@/components/PrintButton";
import type { MenuGroup, MenuItem, MenuSection } from "@/data/menu";

function MenuItemRow({ item }: { item: MenuItem }) {
  return (
    <div className="flex w-full items-end gap-2 text-sm sm:text-base">
      <span className="shrink-0 font-medium tracking-wide text-zinc-200 print:text-zinc-900">
        {item.name}
      </span>
      <span
        aria-hidden
        className="mb-1.5 min-h-[1px] min-w-[0.5rem] flex-1 border-b border-dotted border-amber-500/35 print:border-zinc-400"
      />
      <span className="shrink-0 tabular-nums font-semibold text-amber-400 print:text-amber-900">
        {item.price}
      </span>
    </div>
  );
}

function SectionBlock({ section }: { section: MenuSection }) {
  return (
    <section className="menu-section break-inside-avoid rounded-lg border border-amber-500/25 bg-black/20 p-4 shadow-[inset_0_1px_0_rgba(212,175,55,0.08)] print:border-zinc-300 print:bg-white print:shadow-none">
      <h3 className="mb-4 border-b border-amber-500/30 pb-2 font-[family-name:var(--font-display)] text-lg font-semibold tracking-[0.2em] text-amber-400 print:text-amber-900 sm:text-xl">
        {section.title}
      </h3>
      <ul className="space-y-2.5">
        {section.items.map((item) => (
          <li key={`${section.title}-${item.name}`}>
            <MenuItemRow item={item} />
          </li>
        ))}
      </ul>
    </section>
  );
}

function GroupBlock({ group }: { group: MenuGroup }) {
  return (
    <div className="space-y-8 break-inside-avoid">
      <h2 className="font-[family-name:var(--font-display)] text-2xl font-bold tracking-[0.25em] text-amber-300 print:text-amber-950 sm:text-3xl">
        {group.title}
      </h2>
      <div className="grid gap-6 sm:grid-cols-1">
        {group.sections.map((section) => (
          <SectionBlock key={section.title} section={section} />
        ))}
      </div>
    </div>
  );
}

export function RestaurantMenu({ groups }: { groups: MenuGroup[] }) {
  return (
    <div className="relative min-h-screen overflow-x-hidden bg-gradient-to-b from-zinc-950 via-zinc-950 to-black text-zinc-100 print:bg-white print:text-zinc-900">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(212,175,55,0.07),_transparent_55%)] print:hidden"
      />
      <div className="relative mx-auto max-w-7xl px-4 pb-16 pt-8 sm:px-6 lg:px-8 lg:pb-24 lg:pt-12">
        <div className="grid gap-10 lg:grid-cols-12 lg:gap-12">
          <aside className="lg:col-span-5 lg:sticky lg:top-8 lg:self-start">
            <div className="relative rounded-xl border border-amber-500/35 bg-zinc-900/50 p-6 shadow-[0_0_0_1px_rgba(212,175,55,0.12)_inset] print:border-zinc-300 print:bg-white print:shadow-none">
              <div
                aria-hidden
                className="pointer-events-none absolute left-3 top-3 h-6 w-6 border-l-2 border-t-2 border-amber-500/50 print:border-amber-800"
              />
              <div
                aria-hidden
                className="pointer-events-none absolute right-3 top-3 h-6 w-6 border-r-2 border-t-2 border-amber-500/50 print:border-amber-800"
              />
              <div
                aria-hidden
                className="pointer-events-none absolute bottom-3 left-3 h-6 w-6 border-b-2 border-l-2 border-amber-500/50 print:border-amber-800"
              />
              <div
                aria-hidden
                className="pointer-events-none absolute bottom-3 right-3 h-6 w-6 border-b-2 border-r-2 border-amber-500/50 print:border-amber-800"
              />

              <div className="flex flex-col items-center text-center">
                <div className="relative mb-5 h-36 w-36 sm:h-40 sm:w-40">
                  <Image
                    src="/logo.png"
                    alt="Six Season Restaurant logo"
                    fill
                    className="object-contain drop-shadow-[0_4px_20px_rgba(212,175,55,0.25)]"
                    sizes="160px"
                    priority
                  />
                </div>
                <p className="font-[family-name:var(--font-script)] text-2xl text-amber-400/95 print:text-amber-900 sm:text-3xl">
                  A Taste You&apos;ll Remember
                </p>
                <p className="mt-2 font-[family-name:var(--font-display)] text-3xl font-bold tracking-[0.2em] text-amber-300 print:text-amber-950 sm:text-4xl">
                  SIX SEASON
                </p>
                <p className="mt-1 text-xs font-semibold tracking-[0.35em] text-zinc-400 print:text-zinc-600 sm:text-sm">
                  RESTAURANT
                </p>
                <p className="mt-4 max-w-sm text-sm leading-relaxed text-zinc-300 print:text-zinc-700">
                  Good Food • Great Mood • Six Seasons
                </p>
                <p className="mt-3 max-w-sm text-xs leading-relaxed text-zinc-400 print:text-zinc-600">
                  From aromatic biryanis to sizzling starters — crafted with
                  authentic spices and a passion for perfection.
                </p>
              </div>

              <div className="mt-8 space-y-3 border-t border-amber-500/25 pt-6 text-left text-xs leading-relaxed text-zinc-300 print:border-zinc-300 print:text-zinc-800 sm:text-sm">
                <p>
                  <span className="font-semibold text-amber-400/90 print:text-amber-900">
                    Address
                  </span>
                  <br />
                  Near Apollo Clinic, Batarashi Road, Rajbari, Dharmanagar,
                  North Tripura, Tripura 799253
                </p>
                <p>
                  <span className="font-semibold text-amber-400/90 print:text-amber-900">
                    Phone
                  </span>
                  <br />
                  <a
                    className="text-amber-300 print:text-amber-950"
                    href="tel:+919436341645"
                  >
                    +91 94363 41645
                  </a>
                </p>
                <p>
                  <span className="font-semibold text-amber-400/90 print:text-amber-900">
                    Hours
                  </span>
                  <br />
                  11:00 AM – 11:00 PM · Open every day
                </p>
              </div>

              <div className="mt-6 flex flex-wrap justify-center gap-3 print:hidden">
                <PrintButton />
              </div>
            </div>
          </aside>

          <main className="lg:col-span-7">
            <div className="mb-8 flex flex-col gap-2 border-b border-amber-500/25 pb-6 print:border-zinc-300 lg:mb-10">
              <p className="font-[family-name:var(--font-display)] text-xl text-amber-200 print:text-amber-950">
                Menu &amp; pricing
              </p>
              <p className="text-sm text-zinc-400 print:text-zinc-600">
                Scroll on your phone, or use{" "}
                <strong className="font-medium text-zinc-300 print:text-zinc-800">
                  Print menu
                </strong>{" "}
                for multiple pages — your browser will split sections across
                sheets automatically.
              </p>
            </div>

            <div className="space-y-14">
              {groups.map((group) => (
                <GroupBlock key={group.title} group={group} />
              ))}
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}
