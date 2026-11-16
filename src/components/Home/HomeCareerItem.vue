<template>
  <li class="career-item">
    <img :src="logoUrl" :alt="experience.company" class="career-item-icon" />

    <div class="row">
      <div class="col-12 col-md-8">
        <h3 class="text-primary mb-1">
          {{ experience.position }}
        </h3>
        <p class="h6 text-muted"><IconBuilding class="me-2" /> {{ experience.company }}</p>
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
    <div v-if="experience.context" class="fst-italic" v-html="formattedContext" />

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
import IconBuilding from '@/components/Icon/IconBuilding.vue'

const props = defineProps({
  experience: {
    type: Object,
    required: true,
  },
})

// Les dates du YAML sont interprétées à minuit UTC : on les formate en UTC
// pour ne pas glisser au mois précédent selon le fuseau du visiteur
const dateFormatter = new Intl.DateTimeFormat('fr-FR', {
  year: 'numeric',
  month: 'long',
  timeZone: 'UTC',
})

// Intl.DurationFormat n'est pas disponible sur tous les navigateurs
const durationFormatter =
  typeof Intl.DurationFormat === 'function'
    ? new Intl.DurationFormat('fr-FR', { style: 'long' })
    : null

const formatDurationFallback = ({ years, months }) => {
  const parts = []
  if (years > 0) parts.push(`${years} ${years > 1 ? 'ans' : 'an'}`)
  if (months > 0) parts.push(`${months} mois`)
  return parts.join(' et ')
}

const logoUrl = computed(
  () =>
    new URL(
      `../../assets/datas/career/${props.experience.logo || props.experience.slug}.png`,
      import.meta.url,
    ).href,
)
const formattedStartDate = computed(() => dateFormatter.format(props.experience.startDate))
const formattedEndDate = computed(() =>
  props.experience.endDate ? dateFormatter.format(props.experience.endDate) : "Aujourd'hui",
)
const formattedContext = computed(() => marked.parse(props.experience.context))
const formattedDescription = computed(() => marked.parse(props.experience.description))

const formattedDuration = computed(() => {
  const start = props.experience.startDate
  let end

  if (props.experience.endDate) {
    // Le jour de fin est inclus dans la mission
    end = new Date(props.experience.endDate)
    end.setUTCDate(end.getUTCDate() + 1)
  } else {
    const today = new Date()
    end = new Date(Date.UTC(today.getFullYear(), today.getMonth(), today.getDate()))
  }

  let months =
    (end.getUTCFullYear() - start.getUTCFullYear()) * 12 + (end.getUTCMonth() - start.getUTCMonth())

  if (end.getUTCDate() < start.getUTCDate()) {
    months--
  }

  if (months < 1) {
    return "moins d'un mois"
  }

  const duration = { years: Math.floor(months / 12), months: months % 12 }

  return durationFormatter ? durationFormatter.format(duration) : formatDurationFallback(duration)
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
