angular.module ("app")

	.factory ("moreService", ["$http", "$q", function ($http, $q) {
		var categories = [];

		return {
			getCategories: function () {
				var q = $q.defer ();

				$http.get ("https://nicolas.cloudant.com/cocktails/_all_docs?include_docs=true")
				.success (function (data, status, header, config) {
					catFromdb = [];

					for (var i = data.rows.length - 1; i >= 0; i--) {
						tempCat = {
							id: i,
							name: data.rows[i].doc.name
						}

						if (tempCat.name != null) {
							catFromdb.push (tempCat);
						}
					}

					categories = catFromdb;
					q.resolve (catFromdb);
				})

				return q.promise;
			},
			addCategorie : function (catName) {
				var q = $q.defer ();
				var categorie = {
					name: catName
				}

				$http.post ("https://nicolas.cloudant.com/cocktails", categorie)
				.success (function (data, status, headers, config) {
					console.log (data);
					q.resolve (data.data);
				});

				return q.promise;
			},
			getCategorie: function (id) {
				return ;
			}
		}
	}])