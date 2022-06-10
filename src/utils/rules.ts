export default {
   required: (message: string = 'Обязательное поле') => ({
      required: true,
      message: message
   })
}
