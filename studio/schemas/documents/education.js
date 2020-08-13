export default {
  name: 'education',
  type: 'document',
  title: 'Utdanning',
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Title'
    },
    {
      name: 'study',
      type: 'string',
      title: 'Study'
    },
    {
      name: 'details',
      type: 'text',
      title: 'Details'
    },
    {
      name: 'startDate',
      type: 'date',
      title: 'Start Date',
      options: {
        dateFormat: 'YYYY-MM-DD',
        calendarTodayLabel: 'Today'
      }
    },
    {
      name: 'endDate',
      type: 'date',
      title: 'End Date',
      options: {
        dateFormat: 'YYYY-MM-DD',
        calendarTodayLabel: 'Today'
      }
    },
    {
      name: 'visible',
      type: 'boolean',
      title: 'Visible?'
    }
  ],
  initialValue: {
    visible: false
  }
}
