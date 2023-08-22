const aboutValidation = new JustValidate('.about__form', {
  successFieldCssClass: 'is-valid',
  errorFieldCssClass: 'is-invalid',
  errorLabelCssClass: 'is-label-invalid',
  errorLabelStyle: {
    color: '#F06666',
  },
});

aboutValidation
  .addField('#about-email', [
    {
      rule: 'required',
      errorMessage: 'Вы не ввели e-mail',
    },
    {
      rule: 'email',
      errorMessage: 'Пожалуйста, введите действительный e-mail',
    },
  ])

const contactsValidation = new JustValidate('.contacts__form', {
  successFieldCssClass: 'is-valid',
  errorFieldCssClass: 'is-invalid',
  errorLabelCssClass: 'is-label-invalid',
  errorLabelStyle: {
    color: '#F06666',
  },
});

contactsValidation
  .addField('#name', [
    {
      rule: 'required',
      errorMessage: 'Вы не ввели имя',
    },
    {
      rule: 'minLength',
      value: 2,
      errorMessage: 'Поле должно содержать минимум :value символов',
    },
    {
      rule: 'maxLength',
      value: 12,
      errorMessage: 'Поле должно содержать максимум :value символов',
    },
    {
      rule: 'customRegexp',
      value: '^[a-zA-Zа-яА-Я -]+$',
      errorMessage: 'Недопустимый формат',
    },
  ])
  .addField('#contacts-email', [
    {
      rule: 'required',
      errorMessage: 'Вы не ввели e-mail',
    },
    {
      rule: 'email',
      errorMessage: 'Пожалуйста, введите действительный e-mail',
    },
  ])
  .addField('#text', [
    {
      rule: 'required',
      errorMessage: 'Поле не может быть пустым',
    },
  ])
