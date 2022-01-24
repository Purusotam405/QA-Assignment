import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

const routes: Routes = [
  { path: "", redirectTo: "user/login", pathMatch: "full" },
  {
    path: "user",
    loadChildren: () => import("./user/user.module").then(m => m.UserModule)
  },
  {
    path: "fixtures",
    loadChildren: () =>
      import("./fixtures/fixture.module").then(m => m.FixtureModule)
  },
  { path: "**", redirectTo: "user/login" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
