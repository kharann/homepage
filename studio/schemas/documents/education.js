export default {
  name: 'education',
  type: 'document',
  title: 'Utdanning',
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Tittel'
    },
    {
      name: 'study',
      type: 'string',
      title: 'Studie'
    },
    {
      name: 'details',
      type: 'text',
      title: 'Detaljer'
    },
    {
      name: 'startDate',
      type: 'date',
      title: 'Start Dato',
      options: {
        dateFormat: 'YYYY-MM-DD',
        calendarTodayLabel: 'Today'
      }
    },
    {
      name: 'endDate',
      type: 'date',
      title: 'Slutt Dato',
      options: {
        dateFormat: 'YYYY-MM-DD',
        calendarTodayLabel: 'Today'
      }
    },
    {
      name: 'visible',
      type: 'boolean',
      title: 'Vises?'
    }
  ],
  initialValue: {
    visible: false
  }
}
