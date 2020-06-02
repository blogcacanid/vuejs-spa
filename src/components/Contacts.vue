<template>
    <div class="container py-4">
        <div class="row">
            <div class="col-md-12">
                <div class="card">
                    <div class="card-header"><h3><font-awesome-icon icon="address-card" />&nbsp;Contacts</h3></div>
                    <div class="card-body">
                        <p>
                            At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum 
                            deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, 
                            similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem 
                            rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil 
                            impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. 
                            Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates 
                            repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis 
                            voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.
                        </p>
                        <p>
                            Email: blog.cacan.id@gmail.com <br />
                            Blog: https://blog.cacan.id
                        </p>
                    </div>
                    <div class="card-footer"><a href="#" @click.prevent="back" class="btn btn-secondary"><font-awesome-icon icon="arrow-alt-circle-left" />&nbsp;Go back</a></div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    export default {
        methods: {
            back() {
                this.$router.go(-1);
            }
        }
    }
</script>