export default {
  name: 'personal_info',
  type: 'document',
  title: 'Personlig informasjon',
  fields: [
    { name: 'name', type: 'string', title: 'Name' },
    { name: 'phone', type: 'string', title: 'Phonenumber' },
    { name: 'mail', type: 'string', title: 'Email' },
    { name: 'github', type: 'url', title: 'Github-link' },
    { name: 'linkedin', type: 'url', title: 'Linkedin-link' },
    { name: 'homepage', type: 'url', title: 'Homepage' }
  ]
}
