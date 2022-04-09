<template>
  <div>
    <h1>Create an event</h1>
    <form @submit.prevent="sendForm">
        <p style="color:Tomato;">{{ event.category }}</p>
      <BaseSelect
        :options="categories"
        v-model="event.category"
        label="Select a category"
      />

      <fieldset>
        <legend>Name & describe your event</legend>

        <p style="color:Tomato;">{{ event.title }}</p>
        <BaseInput
          v-model="event.title"
          label="Title"
          type="text"
          error="This input has an error!"
        />

        <p style="color:Tomato;">{{ event.description }}</p>
        <BaseInput
          v-model="event.description"
          label="Description"
          type="text"
        />
      </fieldset>

      <fieldset>
        <legend>Where is your event?</legend>

        <p style="color:Tomato;">{{ event.location }}</p>
        <BaseInput
          v-model="event.location"
          label="Location"
          type="text"
        />
      </fieldset>

      <fieldset>
        <legend>Pets</legend>

        <p>Are pets allowed?</p>
        <div>
          <BaseRadioGroup
            v-model="event.pets"
            name="pets"
            :options="petOptions"
          />
        </div>
      </fieldset>

      <fieldset>
        <legend>Extras</legend>
        <div>
          <BaseCheckbox
            v-model="event.extras.catering"
            label="Catering"
          />
        </div>

        <div>
          <BaseCheckbox
            v-model="event.extras.music"
            label="Live music"
          />
        </div>
      </fieldset>


      <button type="submit">Submit</button>
    </form>

    <pre>{{ event }}</pre>
  </div>
</template>

<script>
// import axios from 'axios'
import BaseInput from '@/components/BaseInput.vue'
import BaseCheckbox from '@/components/BaseCheckbox.vue'
// import BaseRadio from '@/components/BaseRadio.vue'
import BaseRadioGroup from '@/components/BaseRadioGroup.vue'
import BaseSelect from '@/components/BaseSelect.vue'

export default {
  name: 'Form',

  components: {
    BaseInput,
    BaseCheckbox,
    // BaseRadio,
    BaseRadioGroup,
    BaseSelect,
  },

  data () {
    return {
    categories: [
        'sustainability',
        'nature',
        'animal welfare',
        'housing',
        'education',
        'food',
        'community'
      ],
      event: {
        category: '',
        title: '',
        description: '',
        location: '',
        pets: 1,
        extras: {
          catering: false,
          music: false
        }
      },
      petOptions: [
        { label: 'Yes', value: 1 },
        { label: 'No', value: 0 }
      ]
    }
  },
  methods: {
    // sendForm (e) {
    //   axios.post('https://my-json-server.typicode.com/Code-Pop/Vue-3-Forms/events', this.event)
    //     .then(function (response) {
    //       console.log('Response', response)
    //     })
    //     .catch(function (err) {
    //       console.log('Error', err)
    //     })
    // }
  }
}
</script>


<style>
fieldset {
  border: 0;
  margin: 0;
  padding: 0;
}

legend {
  font-size: 28px;
  font-weight: 700;
  margin-top: 20px;
}
</style>
