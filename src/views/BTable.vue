<template>
  <article>
    <b-table>
      <table>
        <thead>
          <tr>
            <th>Header</th>
            <th>Header</th>
            <th>Header</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Row 1</td>
            <td>Row 1</td>
            <td>Row 1</td>
          </tr>
          <tr>
            <td>Row 2</td>
            <td>Row 2</td>
            <td>Row 2</td>
          </tr>
          <tr>
            <td>Row 3</td>
            <td>Row 3</td>
            <td>Row 3</td>
          </tr>
          <tr>
            <td colspan="3">Row 4</td>
          </tr>
        </tbody>
        <tfoot>
          <tr>
            <th>Footer</th>
            <th>Footer</th>
            <th>Footer</th>
          </tr>
        </tfoot>
      </table>
    </b-table>

    <b-table>
      <table class="table">
        <tbody>
          <tr>
            <th>Header</th>
            <td>Column</td>
          </tr>
          <tr>
            <th>Header</th>
            <td>Column</td>
          </tr>
          <tr>
            <th>Header</th>
            <td>Column</td>
          </tr>
        </tbody>
      </table>
    </b-table>
  </article>
</template>

<script>
import BTable from '../components/BTable/BTable'

export default {
  name: 'b-table-view',
  components: {
    BTable
  }
}
</script>
