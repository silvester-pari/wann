<template>
  <v-container>
    <h2 class="font-weight-light">Favorites</h2>
    <template v-if="!$store.state.stops.stops.length > 0">
      <div
        v-for="n in 3"
        :key="n"
        class="mb-5"
      >
        <v-skeleton-loader
          type="list-item-avatar"
          style="transform: scale(0.5); transform-origin: left;"
          width="200px"
          tile
        />
        <v-skeleton-loader
          type="list-item-avatar-two-line"
          class="elevation-3 py-3"
          tile
        />
      </div>
    </template>
    <template
        v-for="stop in $store.state.stops.stops"
    >
      <div
        :key="stop.locationStop.properties.attributes.rbl"
        class="mb-5"
      >
        <v-subheader class="pl-0">
          <v-icon left >mdi-star</v-icon>
          {{ stop.locationStop.properties.title }}
        </v-subheader>
        <v-row
          :key="stop.locationStop.properties.attributes.rbl"
          class="d-flex flex-row elevation-3 ma-0"
        >
          <v-col cols="2" class="d-flex align-center justify-center">
            <v-responsive
              :aspect-ratio="1/1"
              class="primary align-center justify-center"
            >
              <span class="white--text d-flex align-center justify-center">
                {{ stop.lines[0].name }}
              </span>
            </v-responsive>
          </v-col>
          <v-col cols="1">
            <v-divider vertical></v-divider>
          </v-col>
          <v-col cols="9" class="py-0">
            <v-list dense>
              <v-list-item
                v-for="(i, key) in 2"
                :key="key"
                class="pl-0"
              >
                <v-list-item-content>
                  <v-list-item-title v-text="stop.lines[0].towards"></v-list-item-title>
                </v-list-item-content>

                <v-list-item-icon class="justify-end font-weight-bold">
                  {{ stop.lines[0].departures.departure[i].departureTime.countdown }}
                </v-list-item-icon>

              </v-list-item>
            </v-list>
          </v-col>
        </v-row>
      </div>
    </template>

  </v-container>
</template>

<script>
export default {

}
</script>