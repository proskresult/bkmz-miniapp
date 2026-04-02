import { PageShell } from "@/components/landing/page-shell"

export default function AmoCrmPage() {
  return (
    <PageShell
      title="amoCRM и системный бизнес"
      subtitle="Не просто настройка CRM, а система управления бизнесом, в которой видно деньги, точки роста и управляется выручка."
    >
      <div className="space-y-6">
        <section className="rounded-3xl border border-white/10 bg-[#070b12] p-6">
          <div className="mb-3 inline-flex rounded-full border border-primary/20 bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
            Для кого
          </div>

          <h2 className="text-2xl font-semibold text-white">
            Для бизнеса, где CRM должна приносить результат
          </h2>

          <div className="mt-4 space-y-3 text-base leading-7 text-muted-foreground">
            <p>
              Эта страница для тех, у кого уже есть продажи, команда и заявки,
              но нет прозрачности, понятной системы и управляемости.
            </p>
            <p>
              amoCRM в таком случае нужна не как “программа для менеджеров”, а
              как рабочий инструмент, который показывает, где теряются деньги,
              какие каналы реально дают рост и что влияет на выручку прямо
              сейчас.
            </p>
          </div>
        </section>

        <section className="rounded-3xl border border-white/10 bg-[#070b12] p-6">
          <div className="mb-3 inline-flex rounded-full border border-primary/20 bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
            Что делаем
          </div>

          <h2 className="text-2xl font-semibold text-white">
            Что входит в выстраивание системы
          </h2>

          <div className="mt-5 grid gap-4">
            <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-5">
              <div className="text-lg font-semibold text-white">Контроль</div>
              <div className="mt-3 space-y-2 text-muted-foreground">
                <p>— описание бизнес-процессов компании</p>
                <p>— регламент работы менеджера</p>
                <p>— база знаний для сотрудников</p>
                <p>— общий и индивидуальный план продаж</p>
              </div>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-5">
              <div className="text-lg font-semibold text-white">Аналитика</div>
              <div className="mt-3 space-y-2 text-muted-foreground">
                <p>— понимание загрузки менеджеров</p>
                <p>— регулярные отчёты</p>
                <p>— дашборд по ключевым метрикам</p>
                <p>— аналитика конверсий, отказов и менеджеров</p>
                <p>— аналитика источников трафика</p>
              </div>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-5">
              <div className="text-lg font-semibold text-white">
                Автоматизация
              </div>
              <div className="mt-3 space-y-2 text-muted-foreground">
                <p>— автоматическая постановка задач</p>
                <p>— автоматическое движение сделок по этапам</p>
                <p>— автоматизированный документооборот</p>
                <p>— шаблоны сообщений и писем</p>
              </div>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-5">
              <div className="text-lg font-semibold text-white">
                Работа менеджеров
              </div>
              <div className="mt-3 space-y-2 text-muted-foreground">
                <p>— вся работа ведётся только через CRM</p>
                <p>— нет сделок без задач</p>
                <p>— нет просроченных задач</p>
                <p>— сделки не двигаются хаотично</p>
                <p>— причины отказов соответствуют реальности</p>
                <p>— после каждого контакта есть комментарий</p>
                <p>— вся информация хранится в карточке сделки</p>
                <p>— статусы соответствуют процессу</p>
              </div>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-5">
              <div className="text-lg font-semibold text-white">
                Трафик и заявки
              </div>
              <div className="mt-3 space-y-2 text-muted-foreground">
                <p>— подключение сайта</p>
                <p>— подключение телефонии</p>
                <p>— подключение почты</p>
                <p>— подключение мессенджеров и соцсетей</p>
                <p>— фиксация источника каждой заявки</p>
              </div>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-5">
              <div className="text-lg font-semibold text-white">
                Работа с клиентами
              </div>
              <div className="mt-3 space-y-2 text-muted-foreground">
                <p>— роли и права доступа</p>
                <p>— воронка первичных продаж</p>
                <p>— воронка повторных продаж</p>
                <p>— воронка отказников</p>
                <p>— структура карточек</p>
                <p>— причины отказов</p>
              </div>
            </div>
          </div>
        </section>

        <section className="rounded-3xl border border-white/10 bg-[#070b12] p-6">
          <div className="mb-3 inline-flex rounded-full border border-primary/20 bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
            На что отвечает CRM
          </div>

          <h2 className="text-2xl font-semibold text-white">
            Эффективная CRM отвечает на ключевые вопросы бизнеса
          </h2>

          <div className="mt-5 space-y-4">
            <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-5">
              <div className="text-lg font-semibold text-white">
                Где теряются деньги
              </div>
              <p className="mt-2 text-muted-foreground">
                Видны слабые места воронки, просадки по этапам и реальные точки
                потерь.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-5">
              <div className="text-lg font-semibold text-white">
                Какие каналы дают рост
              </div>
              <p className="mt-2 text-muted-foreground">
                Понятно, какие источники реально приносят выручку, а какие просто
                расходуют бюджет.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-5">
              <div className="text-lg font-semibold text-white">
                Что влияет на результат
              </div>
              <p className="mt-2 text-muted-foreground">
                Решения принимаются не на ощущениях, а на понятных цифрах,
                отчётах и аналитике.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-5">
              <div className="text-lg font-semibold text-white">
                Как вернуть клиентов
              </div>
              <p className="mt-2 text-muted-foreground">
                Появляется система возврата и повторных продаж, а не разовая
                работа с базой.
              </p>
            </div>
          </div>
        </section>

        <section className="rounded-3xl border border-white/10 bg-[#070b12] p-6">
          <div className="mb-3 inline-flex rounded-full border border-primary/20 bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
            Форматы работы
          </div>

          <h2 className="text-2xl font-semibold text-white">
            Как можно работать со мной
          </h2>

          <div className="mt-5 grid gap-4 md:grid-cols-2">
            <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-5">
              <div className="text-lg font-semibold text-white">
                Система под ключ
              </div>
              <p className="mt-3 text-muted-foreground">
                Я полностью проектирую и внедряю систему под ваш бизнес: от
                процессов и логики воронок до автоматизации, аналитики и
                контроля.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-5">
              <div className="text-lg font-semibold text-white">
                Модель + мастермайнды
              </div>
              <p className="mt-3 text-muted-foreground">
                Передаю понятную структуру и разбираю с вами эти блоки в работе,
                чтобы вы могли внедрить и развивать систему самостоятельно.
              </p>
            </div>
          </div>
        </section>

        <section className="rounded-3xl border border-primary/15 bg-primary/5 p-6">
          <h2 className="text-2xl font-semibold text-white">
            Итог: CRM становится инструментом управления, а не просто “настроенной системой”
          </h2>

          <div className="mt-4 space-y-3 text-base leading-7 text-muted-foreground">
            <p>
              Вы перестаёте работать на ощущениях и начинаете видеть, что
              происходит в бизнесе здесь и сейчас.
            </p>
            <p>
              Появляется управляемость, прозрачность и понятная база для роста —
              от привлечения клиента до повторной выручки.
            </p>
          </div>

          <div className="mt-6 flex flex-wrap gap-3">
            <a
              href="/consultation"
              className="inline-flex min-h-14 items-center justify-center rounded-2xl bg-primary px-8 py-4 text-base font-semibold text-black"
            >
              Обсудить внедрение
            </a>

            <a
              href="/#lead-form"
              className="inline-flex min-h-14 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.03] px-8 py-4 text-base font-semibold text-white"
            >
              Получить разбор
            </a>
          </div>
        </section>
      </div>
    </PageShell>
  )
}
