<template>
  <li class="career-item">
    <img :src="logoUrl" :alt="experience.company" class="career-item-icon" />

    <div class="row">
      <div class="col-12 col-md-8">
        <h3 class="text-primary mb-1">
          {{ experience.position }}
        </h3>
        <h6 class="text-muted"><i class="fa fa-building me-2" /> {{ experience.company }}</h6>
      </div>
      <div class="col text-md-end">
        <p class="mb-1">
          {{ formattedStartDate }} > {{ formattedEndDate }}
          <span class="fw-light ms-2">({{ formattedDuration }})</span>
        </p>

        <ul class="list-inline">
          <li v-for="tag in experience.tags" :key="experience.slug + tag" class="list-inline-item">
            <span class="badge rounded-pill bg-light text-dark">{{ tag }}</span>
          </li>
        </ul>
      </div>
    </div>

    <!-- eslint-disable vue/no-v-html -->
    <div v-if="experience.context" class="text-gray-500 fst-italic" v-html="formattedContext" />

    <!-- eslint-disable vue/no-v-html -->
    <div v-if="experience.description" class="text-black" v-html="formattedDescription" />

    <ul
      v-if="experience.technologies && experience.technologies.length > 0"
      class="mt-3 list-inline"
    >
      <li v-for="technology in experience.technologies" :key="technology" class="list-inline-item">
        <span class="badge rounded-pill text-bg-primary text-white">{{ technology }}</span>
      </li>
    </ul>
  </li>
</template>

<script setup>
import { computed } from 'vue'
import { marked } from 'marked'

const props = defineProps({
  experience: {
    type: Object,
    required: true,
  },
})

const dateFormatter = new Intl.DateTimeFormat('fr-FR', {
  year: 'numeric',
  month: 'long',
})

const durationFormatter = new Intl.DurationFormat('fr-FR', { style: 'long' })

const logoUrl = computed(
  () => new URL(`../../assets/datas/career/${props.experience.slug}.png`, import.meta.url).href,
)
const formattedStartDate = computed(() => dateFormatter.format(props.experience.startDate))
const formattedEndDate = computed(() =>
  props.experience.endDate ? dateFormatter.format(props.experience.endDate) : "Aujourd'hui",
)
const formattedContext = computed(() => marked.parse(props.experience.context))
const formattedDescription = computed(() => marked.parse(props.experience.description))

const formattedDuration = computed(() => {
  const start = props.experience.startDate
  const end = props.experience.endDate || new Date()

  let years = end.getFullYear() - start.getFullYear()
  let months = end.getMonth() - start.getMonth()

  if (months < 0) {
    years--
    months += 12
  }

  return durationFormatter.format({
    years: years,
    months: months,
  })
})
</script>

<style scoped lang="scss">
.career-item {
  position: relative;
  margin-bottom: 2rem;
  background: #fff;
  padding: 2rem;
  border-radius: 10px;

  &:last-child {
    margin-bottom: 0;
  }

  &:after {
    position: absolute;
    display: block;
    top: 0;
  }

  &-icon {
    position: absolute;
    left: -75px;
    top: 0;
    background-color: #fff;
    color: hsl(217, 88.8%, 35.1%);
    border-radius: 50%;
    height: 50px;
    width: 50px;
    padding: 5px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
}
</style>
