<script lang='ts'>
import { Options, Vue } from 'vue-property-decorator'
import '@fullcalendar/core/vdom' // solve problem with Vite
import type { CalendarOptions, DateSelectArg, EventApi, EventClickArg } from '@fullcalendar/vue3'
import FullCalendar from '@fullcalendar/vue3'
import dayGridPlugin from '@fullcalendar/daygrid'
import timeGridPlugin from '@fullcalendar/timegrid'
import interactionPlugin from '@fullcalendar/interaction'
import luxon2Plugin from '@fullcalendar/luxon2'
import listPlugin from '@fullcalendar/list'
import { formatDate } from '@fullcalendar/core'
import { INITIAL_EVENTS, createEventId } from '@/event-utils'

@Options({
  components: {
    FullCalendar,
  },
  metaInfo: {
    title: 'Calendar',
  },
  methods: {
    formatDate,
  },
})
export default class Calendar extends Vue {
  calendarOptions: CalendarOptions = {
    plugins: [
      dayGridPlugin,
      timeGridPlugin,
      interactionPlugin, // needed for dateClick
      listPlugin,
      luxon2Plugin,
    ],
    titleFormat: 'LLLL d, yyyy', // you can now use Luxon format strings!
    slotDuration: '00:30:00',
    slotLabelFormat: {
      hour: 'numeric',
      minute: '2-digit',
      omitZeroMinute: false,
    },
    headerToolbar: false,
    // headerToolbar: {
    //   start: 'title',
    //   end: 'listWeek,timeGridDay,timeGridWeek,dayGridMonth',
    // },
    initialView: 'timeGridWeek',
    initialEvents: INITIAL_EVENTS, // alternatively, use the `events` setting to fetch from a feed
    editable: true,
    navLinks: true,
    selectable: true,
    selectMirror: true,
    dayMaxEvents: true,
    weekends: true,
    weekNumbers: true,
    select: this.handleDateSelect,
    eventClick: this.handleEventClick,
    eventsSet: this.handleEvents,
    /* you can update a remote database when these fire:
    eventAdd:
    eventChange:
    eventRemove:
    */
  }

  currentEvents: EventApi[] = []

  handleWeekendsToggle() {
    this.calendarOptions.weekends = !this.calendarOptions.weekends // update a property
  }

  handleDateSelect(selectInfo: DateSelectArg) {
    const title = prompt('Please enter a new title for your event')
    const calendarApi = selectInfo.view.calendar
    calendarApi.unselect() // clear date selection
    if (title) {
      calendarApi.addEvent({
        id: createEventId(),
        title,
        start: selectInfo.startStr,
        end: selectInfo.endStr,
        allDay: selectInfo.allDay,
      })
    }
  }

  handleEventClick(clickInfo: EventClickArg) {
    if (confirm(`Are you sure you want to delete the event '${clickInfo.event.title}'`))
      clickInfo.event.remove()
  }

  handleEvents(events: EventApi[]) {
    this.currentEvents = events
  }
}
</script>

<template>
  <calendar-layout>
    <main class="flex flex-1 mt-24 text-sm demo-app">
      <aside class="hidden sm:block demo-app-sidebar w-80">
        <!-- <img src="/assets/img/fullcalendar.png" class="w-6 h-6" alt=""> -->
        <section class="px-8 mt-8">
          <label class="flex items-center space-x-2">
            <input type="checkbox" :checked="calendarOptions.weekends" @change="handleWeekendsToggle">
            <span>Toggle Weekends</span>
          </label>
        </section>
        <section class="px-8 mt-8">
          <h2 class="pb-2 font-bold border-b border-primary-500">
            All Events ({{ currentEvents.length }})
          </h2>
          <ul>
            <li v-for="event in currentEvents" :key="event.id">
              <div class="flex flex-col mt-4">
                <b>
                  {{
                    formatDate(event.startStr, {
                      month: 'long',
                      day: 'numeric',
                      hour: 'numeric',
                      minute: 'numeric',
                    })
                  }}
                </b>
                <a :href="event.url" class="px-2 py-1 mt-1 rounded bg-primary-100 hover:bg-primary-500 hover:text-primary-50">{{ event.title }}</a>
              </div>
            </li>
          </ul>
        </section>
      </aside>
      <article class="flex-1 demo-app-main">
        <full-calendar class="demo-app-calendar" :options="calendarOptions">
          <template #eventContent="arg">
            <div class="flex flex-col">
              <span>{{ arg.timeText }}</span>
              <span>{{ arg.event.title }}</span>
            </div>
          </template>
        </full-calendar>
      </article>
    </main>
  </calendar-layout>
</template>

<style scoped lang="postcss">
.demo-app-sidebar {
  @apply bg-primary-200 border-r border-primary-400;
  width: 300px;
}

.fc {
  /* the calendar root */
  /* max-width: 1100px; */
  margin: 0 auto;
}
</style>
